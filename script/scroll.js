document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = {
        "Início": document.querySelector(".header__container"),
        "Cursos": document.querySelector(".explore__container"),
        "Palmares-PE": "Palmares-PE",
        "Escada-PE": "Escada-PE",
        "Vitoria de Santo Antão-PE": "Vitoria de Santo Antão-PE"
    };

    const formSection = document.querySelector(".section__form");
    const citySelect = document.querySelector("select[name='CIDADE']");
    const courseSelect = document.querySelector("select[name='CURSO']");

    function scrollToFormAndSetValue(selectElement, value) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
            selectElement.value = value; 
        }, 500);
    }

    document.querySelectorAll(".nav__links li a, .nav__links__mobile li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            const text = this.textContent.trim();
            if (menuLinks[text]) {
                if (typeof menuLinks[text] === "string") {
                    scrollToFormAndSetValue(citySelect, menuLinks[text]);
                } else {
                    menuLinks[text].scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

    document.querySelectorAll(".explore__card a").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const courseName = this.closest(".explore__card").querySelector("h4").textContent.trim();
            
            scrollToFormAndSetValue(courseSelect, courseName);
        });
    });
});