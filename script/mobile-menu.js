document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.querySelector(".nav__links__mobile");

    menuToggle.addEventListener("change", function () {
        mobileMenu.style.display = menuToggle.checked ? "flex" : "none";
        console.log('funcionou')
    });
});