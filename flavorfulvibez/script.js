/**
 * Flavorful Vibez — site behavior + menu data.
 * Edit MENU_CATEGORIES to swap items, prices, and descriptions.
 */
(function () {
  "use strict";

  const MENU_CATEGORIES = [
    {
      id: "breakfast",
      label: "Breakfast",
      sections: [
        {
          title: "Plates & classics",
          items: [
            { name: "3 Pancakes", price: "$6.25" },
            { name: "2 Eggs", price: "$3.75" },
            { name: "2 French Toast", price: "$6.25" },
            { name: "Banana Pudding French Toast", price: "$8.75" },
            { name: "4 Triangles (1) Waffle", price: "$6.25" },
            { name: "2 Eggs With Cheese", price: "$4.37" },
            { name: "2 Scrambled Eggs With Cheese", price: "$2.81" },
            { name: "2 Scrambled Eggs", price: "$2.50" },
          ],
        },
        {
          title: "Breakfast meats & sides",
          items: [
            { name: "Beef Sausage", price: "$3.75" },
            { name: "Turkey Sausage", price: "$3.75" },
            { name: "Corned Beef Hash", price: "$3.75" },
            { name: "Home Fries", price: "$3.75" },
            { name: "2 Slices Turkey Bacon", price: "$3.75" },
            { name: "Grits", price: "$3.75" },
          ],
        },
        {
          title: "Gourmet flavors (toast / waffle upcharge)",
          items: [
            {
              name: "Gourmet Flavors",
              price: "$3.75",
              desc: "Fruity Pebbles, Oreo, Strawberry Crunch, Banana Pudding, or Peach Cobbler.",
            },
          ],
        },
        {
          title: "Breakfast special",
          items: [
            {
              name: "1 Item, 2 Sides, 1 Meat",
              price: "$31.25",
              desc: "Build-your-plate breakfast combo.",
            },
          ],
        },
        {
          title: "Breakfast egg rolls",
          items: [
            { name: "Egg, Cheese & Turkey Bacon", price: "$5.00" },
            { name: "French Toast, Eggs, Cheese & Bacon", price: "$7.50" },
            { name: "Egg & Cheese", price: "$3.75" },
            { name: "French Toast, Eggs & Cheese", price: "$6.25" },
          ],
        },
      ],
    },
    {
      id: "specials",
      label: "Specials & meals",
      sections: [
        {
          title: "Lunch specials",
          items: [
            {
              name: "1 Meat, 2 Sides (Lunch)",
              price: "$18.75",
              desc: "Smaller portions — less meat.",
            },
            { name: "1 Meat, 3 Sides (Lunch)", price: "$25.00" },
          ],
        },
        {
          title: "Dinner specials",
          items: [
            {
              name: "Dinner Special — 1 Meat, 3 Sides",
              price: "$31.25",
              desc: "1 meat and 3 sides only. If more than 1 meat and 3 sides are chosen, the first meat and first 3 sides will be made; others voided.",
            },
            {
              name: "Dinner Special — 1 Meat, 2 Sides",
              price: "$25.00",
              desc: "Large portion. One meat and 2 sides only. If more than one meat is chosen, the first will be made and the second voided.",
            },
            { name: "Dinner Meal", price: "$18.75" },
            { name: "Dinner — 1 Meat, 2 Sides", price: "$25.00" },
          ],
        },
        {
          title: "Combos & add-ons",
          items: [
            { name: "Upcharge to Smothered", price: "$3.75" },
            { name: "Kids Dinner", price: "$8.75" },
          ],
        },
        {
          title: "Kids menu",
          items: [
            { name: "1 Meat, 1 Side, 1 Capri Sun", price: "$10.00" },
            { name: "1 Meat, 2 Sides, 1 Capri Sun (Kids Meal)", price: "$13.75" },
            { name: "Kids Side", price: "$3.75" },
          ],
        },
        {
          title: "Baskets & chili",
          items: [
            { name: "Baskets With Fries", price: "$15.00" },
            { name: "Chili, Rice & Cornbread", price: "$18.75" },
          ],
        },
        {
          title: "Lunch sides (soul food)",
          items: [
            {
              name: "Cabbage",
              price: "$7.50",
              desc: "Flavorful tender fried cabbage cooked with a blend of savory spices.",
            },
            {
              name: "Baked Mac & Cheese",
              price: "$7.50",
              desc: "Creamy mac and cheese baked to golden perfection.",
            },
            {
              name: "Candied Yams",
              price: "$7.50",
              desc: "Tender yams with a sweet buttery sauce baked to perfection.",
            },
          ],
        },
      ],
    },
    {
      id: "meats",
      label: "Meats & wings",
      sections: [
        {
          title: "Meats",
          items: [
            { name: "Baked Chicken (6)", price: "$10.00" },
            { name: "Chicken Tenders (5)", price: "$8.75" },
            { name: "Party Wings (6 Piece)", price: "$8.75" },
            { name: "Buffalo Chicken", price: "$3.75" },
          ],
        },
        {
          title: "Philly-style (à la carte)",
          items: [
            { name: "Salmon Philly", price: "$15.00" },
            { name: "Steak Philly", price: "$3.75" },
            { name: "Chicken Philly Egg Roll", price: "$3.75" },
          ],
        },
      ],
    },
    {
      id: "sandwiches",
      label: "Sandwiches & rolls",
      sections: [
        {
          title: "Sandwiches / burgers",
          items: [
            { name: "Salmon Philly", price: "$15.00" },
            { name: "Turkey Burger", price: "$12.50" },
            {
              name: "Chicken Philly",
              price: "$12.50",
              desc: "Made with onions, peppers, and cheese.",
            },
          ],
        },
        {
          title: "Egg rolls & quesadillas",
          items: [
            { name: "Soul Food Mac Yams", price: "$3.75" },
            { name: "Shrimp Philly", price: "$3.75" },
            { name: "Salmon Philly Egg Roll", price: "$5.00" },
            { name: "Buffalo Chicken", price: "$3.75" },
            { name: "Philly Cheese Steak", price: "$3.75" },
            { name: "Buffalo Salmon", price: "$3.75" },
            { name: "Chicken Philly Egg Roll", price: "$3.75" },
            { name: "Peach Cobbler", price: "$3.75" },
          ],
        },
      ],
    },
    {
      id: "sides",
      label: "Sides & salads",
      sections: [
        {
          title: "Sides",
          items: [
            { name: "Corn Bread", price: "$1.25" },
            { name: "Sweet Potato Fries", price: "$7.50" },
            { name: "Sweet Corn", price: "$8.75" },
            { name: "French Fries", price: "$3.75" },
            {
              name: "Cabbage",
              price: "$7.50",
              desc: "Flavorful tender fried cabbage cooked with a blend of savory spices.",
            },
            {
              name: "Candied Yams",
              price: "$7.50",
              desc: "Tender yams with a sweet buttery sauce baked to perfection.",
            },
            { name: "Yellow Rice", price: "$7.50" },
            {
              name: "Baked Mac & Cheese",
              price: "$7.50",
              desc: "Creamy mac and cheese baked to golden perfection.",
            },
          ],
        },
        {
          title: "Salads",
          items: [
            {
              name: "Caesar Salad",
              price: "$13.00",
              desc: "Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
            },
          ],
        },
        {
          title: "Sauces",
          items: [
            { name: "Ranch", price: "—" },
            { name: "Blue Cheese", price: "—" },
            { name: "Ketchup", price: "—" },
            { name: "Hot Sauce", price: "—" },
          ],
        },
      ],
    },
    {
      id: "seafood",
      label: "Seafood",
      sections: [
        {
          title: "Seafood plates",
          items: [
            { name: "8 Fried Shrimp", price: "$12.50" },
            { name: "Honey Garlic Salmon", price: "$12.50" },
            { name: "2 Piece Catfish", price: "$11.25" },
            { name: "Catfish Nuggets", price: "$11.25" },
          ],
        },
        {
          title: "Meal upcharges",
          items: [
            { name: "Salmon Meal Upcharge", price: "$2.50" },
            { name: "Catfish Meal Upcharge", price: "$2.50" },
          ],
        },
      ],
    },
    {
      id: "drinks",
      label: "Drinks & desserts",
      sections: [
        {
          title: "Cold drinks",
          items: [
            {
              name: "Iced Tea",
              price: "$3.75",
              desc: "Sweet iced tea — bold tea flavor with just the right amount of sweetness.",
            },
            {
              name: "Lemonade",
              price: "$3.75",
              desc: "Refreshing lemonade, perfect for quenching your thirst.",
            },
            { name: "Fresh Squeezed Lemonade", price: "$6.25" },
            { name: "Arnold Palmer (Half & Half)", price: "$3.75" },
            { name: "Shirley Temple", price: "$3.75" },
            {
              name: "Kool Aid",
              price: "$3.75",
              desc: "Blue raspberry, cherry, grape, watermelon, orange.",
            },
            { name: "Sweet Tea", price: "$3.75" },
            { name: "Small Drink", price: "$2.50" },
            {
              name: "Bottled Drinks",
              price: "$2.50",
              desc: "Calypso ocean blue lemonade; Turkey Hill; pomegranate or strawberry kiwi.",
            },
            { name: "Canned Drinks", price: "$1.25", desc: "Pepsi, Diet Pepsi, ginger ale, root beer, orange." },
            {
              name: "Canned / Bottled Juice, Soda, or Water",
              price: "$1.25",
              desc: "Different flavors.",
            },
            { name: "Water", price: "$1.25" },
          ],
        },
        {
          title: "Desserts",
          items: [
            { name: "2 Gourmet Cookies", price: "$6.25" },
            {
              name: "Banana Pudding Cup",
              price: "$7.50",
              desc: "Homemade banana pudding layered in a cup.",
            },
            { name: "Funnel Cake Fries (6)", price: "$6.25" },
          ],
        },
      ],
    },
  ];

  const NAV_OFFSET = 72;

  var CHEVRON_SVG =
    '<svg class="menu-accordion__chevron-icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>';

  function buildCategoryContent(cat, region) {
    cat.sections.forEach(function (sec) {
      const h3 = document.createElement("h3");
      h3.className = "menu-subheading";
      h3.textContent = sec.title;
      region.appendChild(h3);

      const grid = document.createElement("div");
      grid.className = "menu-grid";

      sec.items.forEach(function (item) {
        const card = document.createElement("article");
        card.className = "menu-card";

        const row = document.createElement("div");
        row.className = "menu-card__row";
        const name = document.createElement("p");
        name.className = "menu-card__name";
        name.textContent = item.name;
        const price = document.createElement("span");
        price.className = "menu-card__price";
        price.textContent = item.price;
        row.appendChild(name);
        row.appendChild(price);
        card.appendChild(row);

        if (item.desc) {
          const desc = document.createElement("p");
          desc.className = "menu-card__desc";
          desc.textContent = item.desc;
          card.appendChild(desc);
        }

        grid.appendChild(card);
      });

      region.appendChild(grid);
    });
  }

  function setAccordionOpen(item, btn, region, open) {
    item.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    region.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
      region.querySelectorAll(".menu-card").forEach(function (card) {
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.animation = "";
      });
    }
  }

  function renderMenu() {
    const root = document.getElementById("menuAccordion");
    if (!root) return;

    root.innerHTML = "";

    MENU_CATEGORIES.forEach(function (cat) {
      const panelId = "menu-acc-panel-" + cat.id;
      const triggerId = "menu-acc-trigger-" + cat.id;

      const item = document.createElement("div");
      item.className = "menu-accordion__item";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "menu-accordion__trigger";
      btn.id = triggerId;
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", panelId);

      const label = document.createElement("span");
      label.className = "menu-accordion__label";
      label.textContent = cat.label;

      const chevWrap = document.createElement("span");
      chevWrap.className = "menu-accordion__chevron";
      chevWrap.innerHTML = CHEVRON_SVG;

      btn.appendChild(label);
      btn.appendChild(chevWrap);

      const wrap = document.createElement("div");
      wrap.className = "menu-accordion__panel-wrap";
      const inner = document.createElement("div");
      inner.className = "menu-accordion__panel-inner";
      const region = document.createElement("div");
      region.className = "menu-accordion__panel";
      region.id = panelId;
      region.setAttribute("role", "region");
      region.setAttribute("aria-labelledby", triggerId);
      region.setAttribute("aria-hidden", "true");

      buildCategoryContent(cat, region);

      inner.appendChild(region);
      wrap.appendChild(inner);
      item.appendChild(btn);
      item.appendChild(wrap);

      btn.addEventListener("click", function () {
        const willOpen = !item.classList.contains("is-open");
        setAccordionOpen(item, btn, region, willOpen);
      });

      root.appendChild(item);
    });
  }

  /**
   * Nav bar matches the section just below the bar: hero (glass), light bands, or dark (menu/footer).
   */
  function getNavbarTheme() {
    const nav = document.getElementById("navbar");
    if (!nav) return "hero";
    const probeY = nav.offsetHeight + 4;
    const bands = [
      { el: document.querySelector(".hero"), theme: "hero" },
      { el: document.querySelector("#about"), theme: "light" },
      { el: document.querySelector("#menu"), theme: "dark" },
      { el: document.querySelector("#reviews"), theme: "light" },
      { el: document.querySelector("#location"), theme: "light" },
      { el: document.querySelector(".site-footer"), theme: "dark" },
    ];
    let nearest = "light";
    let nearestDist = Infinity;
    for (let i = 0; i < bands.length; i++) {
      const row = bands[i];
      if (!row.el) continue;
      const r = row.el.getBoundingClientRect();
      if (probeY >= r.top && probeY <= r.bottom) return row.theme;
      const d =
        probeY < r.top ? r.top - probeY : probeY > r.bottom ? probeY - r.bottom : 0;
      if (d < nearestDist) {
        nearestDist = d;
        nearest = row.theme;
      }
    }
    return nearest;
  }

  function initNavbarTheme() {
    const nav = document.getElementById("navbar");
    if (!nav) return;
    var ticking = false;
    function schedule() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        nav.setAttribute("data-nav-theme", getNavbarTheme());
        ticking = false;
      });
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const hash = this.getAttribute("href");
        if (!hash || hash === "#") return;
        const target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
        closeMobileNav();
      });
    });
  }

  function initMobileNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (!toggle || !menu) return;
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      menu.classList.toggle("is-open", !open);
    });
  }

  function closeMobileNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    if (toggle && menu) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }
  }

  function initFadeIn() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".fade-in").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    const obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in").forEach(function (el) {
      obs.observe(el);
    });
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderMenu();
    initNavbarTheme();
    initSmoothScroll();
    initMobileNav();
    initFadeIn();
    setYear();
  });
})();
