const THEME_KEY = "theme-hue";

const openProjectsBtn = document.getElementById("openProjects");
const closeProjectsBtn = document.getElementById("closeProjects");
const projectsModal = document.getElementById("projectsModal");

const openSettingsBtn = document.getElementById("openSettings");
const closeSettingsBtn = document.getElementById("closeSettings");
const settingsModal = document.getElementById("settingsModal");
const themeHueInput = document.getElementById("themeHue");

const year = document.getElementById("year"); 

let lastActiveEl = null;

function anyModalOpen() {
  return (
    projectsModal?.getAttribute("aria-hidden") === "false" ||
    settingsModal?.getAttribute("aria-hidden") === "false"
  );
}

function updateBodyScroll() {
  document.body.style.overflow = anyModalOpen() ? "hidden" : "";
}

function openModal(modal, closeBtn, opener) {
  if (!modal) return;
  const other = modal === projectsModal ? settingsModal : projectsModal;
  other?.setAttribute("aria-hidden", "true");
  lastActiveEl = opener instanceof HTMLElement ? opener : document.activeElement;
  modal.setAttribute("aria-hidden", "false");
  updateBodyScroll();
  closeBtn?.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  updateBodyScroll();
  if (lastActiveEl && typeof lastActiveEl.focus === "function") lastActiveEl.focus();
  lastActiveEl = null;
}

openProjectsBtn?.addEventListener("click", () =>
  openModal(projectsModal, closeProjectsBtn, openProjectsBtn)
);
closeProjectsBtn?.addEventListener("click", () => closeModal(projectsModal));

openSettingsBtn?.addEventListener("click", () =>
  openModal(settingsModal, closeSettingsBtn, openSettingsBtn)
);
closeSettingsBtn?.addEventListener("click", () => closeModal(settingsModal));

[projectsModal, settingsModal].forEach((modal) => {
  modal?.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.dataset.close === "true") closeModal(modal);
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (projectsModal?.getAttribute("aria-hidden") === "false") {
    closeModal(projectsModal);
    return;
  }
  if (settingsModal?.getAttribute("aria-hidden") === "false") closeModal(settingsModal);
});

function readDefaultHue() {
  const raw = getComputedStyle(document.documentElement).getPropertyValue("--theme-hue").trim();
  const n = Number.parseInt(raw || "210", 10);
  return Number.isFinite(n) ? n : 210;
}

function applyThemeHue(value) {
  let n = Number.parseInt(String(value), 10);
  if (!Number.isFinite(n)) n = readDefaultHue();
  n = Math.max(0, Math.min(360, n));
  document.documentElement.style.setProperty("--theme-hue", String(n));
  if (themeHueInput) {
    themeHueInput.value = String(n);
    themeHueInput.setAttribute("aria-valuenow", String(n));
  }
  try {
    localStorage.setItem(THEME_KEY, String(n));
  } catch {
    /* ignore quota / private mode */
  }
}

function loadThemeHue() {
  let stored = null;
  try {
    stored = localStorage.getItem(THEME_KEY);
  } catch {
    /* ignore */
  }
  const parsed = stored != null ? Number.parseInt(stored, 10) : NaN;
  applyThemeHue(Number.isFinite(parsed) ? parsed : readDefaultHue());
}

themeHueInput?.addEventListener("input", () => applyThemeHue(themeHueInput.value));

loadThemeHue();

if (year) year.textContent = String(new Date().getFullYear());

(function initBounceBoxes() {
  const boxes = document.querySelectorAll(".hero, .grid .card");
  if (!boxes.length) return;

  let zOrder = 4;

  boxes.forEach((el) => {
    let tx = 0;
    let ty = 0;
    let vx = 0;
    let vy = 0;
    let dragStartX = 0;
    let dragStartY = 0;
    let baseTx = 0;
    let baseTy = 0;
    let active = false;
    let springId = 0;

    const maxOffset = () => Math.min(110, Math.max(56, window.innerWidth * 0.14));

    function clamp(n, min, max) {
      return Math.max(min, Math.min(max, n));
    }

    function applyTransform() {
      el.style.transform = `translate(${tx}px, ${ty}px)`;
    }

    function stopSpring() {
      if (springId) {
        cancelAnimationFrame(springId);
        springId = 0;
      }
    }

    function springLoop() {
      const k = 0.22;
      const damp = 0.86;
      vx += (0 - tx) * k;
      vy += (0 - ty) * k;
      vx *= damp;
      vy *= damp;
      tx += vx;
      ty += vy;
      applyTransform();
      if (Math.abs(tx) + Math.abs(ty) + Math.abs(vx) + Math.abs(vy) < 0.35) {
        tx = ty = vx = vy = 0;
        el.style.zIndex = "";
        applyTransform();
        springId = 0;
        return;
      }
      springId = requestAnimationFrame(springLoop);
    }

    function startSpring() {
      stopSpring();
      springId = requestAnimationFrame(springLoop);
    }

    function onPointerMove(e) {
      if (!active) return;
      const m = maxOffset();
      tx = clamp(baseTx + (e.clientX - dragStartX), -m, m);
      ty = clamp(baseTy + (e.clientY - dragStartY), -m, m);
      applyTransform();
    }

    function onPointerUp(e) {
      if (!active) return;
      active = false;
      el.classList.remove("is-dragging");
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointercancel", onPointerUp);
      try {
        if (e.pointerId != null) el.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      startSpring();
    }

    el.classList.add("bounce-box");
    el.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      const target = e.target;
      if (target instanceof HTMLElement && target.closest("a, button, input, select, textarea, label")) {
        return;
      }
      stopSpring();
      vx = vy = 0;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
      baseTx = tx;
      baseTy = ty;
      active = true;
      el.style.zIndex = String(++zOrder);
      el.classList.add("is-dragging");
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
      document.addEventListener("pointermove", onPointerMove);
      document.addEventListener("pointerup", onPointerUp);
      document.addEventListener("pointercancel", onPointerUp);
      e.preventDefault();
    });
  });
})();
