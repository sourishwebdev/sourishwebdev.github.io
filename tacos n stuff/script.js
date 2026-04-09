function openMenu(evt, categoryName) {
    const categories = document.querySelectorAll(".menu-category");
    categories.forEach(cat => cat.classList.remove("active"));
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => tab.classList.remove("active"));
    document.getElementById(categoryName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});