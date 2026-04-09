const openBtn = document.getElementById("openProjects");
const closeBtn = document.getElementById("closeProjects");
const modal = document.getElementById("projectsModal");
const year = document.getElementById("year");

let lastActiveEl = null;

function setModalOpen(open) {
  if (!modal) return;

  if (open) {
    lastActiveEl = document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  } else {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastActiveEl && typeof lastActiveEl.focus === "function") lastActiveEl.focus();
    lastActiveEl = null;
  }
}

openBtn?.addEventListener("click", () => setModalOpen(true));
closeBtn?.addEventListener("click", () => setModalOpen(false));

modal?.addEventListener("click", (e) => {
  const target = e.target;
  if (!(target instanceof HTMLElement)) return;

  if (target.dataset.close === "true") {
    setModalOpen(false);
    return;
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!modal || modal.getAttribute("aria-hidden") === "true") return;
  setModalOpen(false);
});

if (year) year.textContent = String(new Date().getFullYear());
