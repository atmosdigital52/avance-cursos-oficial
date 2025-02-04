document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = {
        "Início": document.querySelector(".header__container"),
        "Cursos": document.querySelector(".explore__container"),
        "Didáticas": document.querySelector(".explore__container"),
        "Nossa Estrutura": document.querySelector(".join__container"),
        "Feedbacks": document.querySelector(".review"),
        "Entre em contato": document.querySelector(".section__form"),
        "Palmares-PE": "Palmares-PE",
        "Escada-PE": "Escada-PE",
        "Vitoria de Santo Antão-PE": "Vitoria de Santo Antão-PE"
    };

    const formSection = document.querySelector(".section__form");
    const citySelect = document.querySelector("select[name='CIDADE']");
    const courseSelect = document.querySelector("select[name='CURSO']");

    function scrollToElement(element) {
        if (!element) return;
        
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.scrollY;
        const middlePosition = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({ top: middlePosition, behavior: "smooth" });
    }

    function scrollToFormAndSetValue(selectElement, value) {
        if (!formSection) return;

        scrollToElement(formSection);

        setTimeout(() => {
            if (selectElement) {
                selectElement.value = value;
                selectElement.dispatchEvent(new Event("change")); // Disparar evento para detectar a mudança
            }
        }, 500);
    }

    // Rolagem para seções da navegação
    document.querySelectorAll(".nav__links li a, .nav__links__mobile li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            
            const text = this.textContent.trim();
            if (menuLinks[text]) {
                if (typeof menuLinks[text] === "string") {
                    scrollToFormAndSetValue(citySelect, menuLinks[text]);
                } else if (menuLinks[text] instanceof Element) {
                    scrollToElement(menuLinks[text]);
                }
            }
        });
    });

    // Botões de inscrição nos cards de curso
    document.querySelectorAll(".explore__card a").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const card = this.closest(".explore__card");
            if (!card) return;

            const courseTitle = card.querySelector("h4");
            if (!courseTitle) return;

            const courseName = courseTitle.textContent.trim();
            scrollToFormAndSetValue(courseSelect, courseName);
        });
    });

    // Botões "Inscreva-se" e "Vem ser Avance"
    document.querySelectorAll(".btn-inscreva, .btn-vem-ser-avance").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            scrollToElement(formSection);
        });
    });

    // Rolagem para seções do Footer
    document.querySelectorAll(".footer__links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            const text = this.textContent.trim();
            if (menuLinks[text]) {
                if (menuLinks[text] instanceof Element) {
                    scrollToElement(menuLinks[text]);
                }
            }
        });
    });

});


