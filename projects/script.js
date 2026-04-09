(function () {
    // Mobile nav
    const toggle = document.querySelector(".nav-toggle");
    const links = document.getElementById("navLinks");
  
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const isOpen = links.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
  
      links.addEventListener("click", (e) => {
        const a = e.target.closest("a");
        if (!a) return;
  
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
  
      document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    }
  
    // Tabs (menu)
    const tabsRoot = document.querySelector("[data-tabs]");
    if (!tabsRoot) return;
  
    const tabButtons = Array.from(tabsRoot.querySelectorAll('[role="tab"][data-tab]'));
    const panels = Array.from(tabsRoot.querySelectorAll('[role="tabpanel"][data-panel]'));
  
    function activateTab(tabId, { focus = true } = {}) {
      tabButtons.forEach((btn) => {
        const selected = btn.dataset.tab === tabId;
        btn.setAttribute("aria-selected", String(selected));
        btn.tabIndex = selected ? 0 : -1;
        if (selected && focus) btn.focus();
      });
  
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== tabId;
      });
    }
  
    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => activateTab(btn.dataset.tab, { focus: false }));
      btn.addEventListener("keydown", (e) => {
        const currentIndex = tabButtons.indexOf(btn);
        if (currentIndex < 0) return;
  
        const prev = () => tabButtons[(currentIndex - 1 + tabButtons.length) % tabButtons.length];
        const next = () => tabButtons[(currentIndex + 1) % tabButtons.length];
  
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          const b = prev();
          activateTab(b.dataset.tab);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          const b = next();
          activateTab(b.dataset.tab);
        } else if (e.key === "Home") {
          e.preventDefault();
          activateTab(tabButtons[0].dataset.tab);
        } else if (e.key === "End") {
          e.preventDefault();
          activateTab(tabButtons[tabButtons.length - 1].dataset.tab);
        }
      });
    });
  
    // Default tab
    activateTab("tacos", { focus: false });
  })();