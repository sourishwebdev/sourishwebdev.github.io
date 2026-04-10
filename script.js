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
