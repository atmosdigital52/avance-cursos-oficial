document.addEventListener("DOMContentLoaded", function () {
    // Mapeia os links do menu para suas respectivas seções ou valores do formulário
    const menuLinks = {
        "Início": document.querySelector(".header__container"),
        "Cursos": document.querySelector(".explore__container"),
        "Palmares-PE": "Palmares-PE",
        "Escada-PE": "Escada-PE",
        "Vitoria de Santo Antão-PE": "Vitoria de Santo Antão-PE"
    };

    // Seleciona os elementos necessários
    const formSection = document.querySelector(".section__form");
    const citySelect = document.querySelector("select[name='CIDADE']");
    const courseSelect = document.querySelector("select[name='CURSO']");

    // Função para rolar para o formulário e definir valores
    function scrollToFormAndSetValue(selectElement, value) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
            selectElement.value = value; // Define o valor no <select>
        }, 500);
    }

    // Adiciona evento de clique para cada link do menu
    document.querySelectorAll(".nav__links li a, .nav__links__mobile li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            
            const text = this.textContent.trim();
            if (menuLinks[text]) {
                if (typeof menuLinks[text] === "string") {
                    // Se for uma cidade, rola e preenche o campo de cidade
                    scrollToFormAndSetValue(citySelect, menuLinks[text]);
                } else {
                    // Se for "Início" ou "Cursos", rola para a seção correspondente
                    menuLinks[text].scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }
        });
    });

    // Adiciona evento de clique nos botões "Inscreva-se" da seção de cursos
    document.querySelectorAll(".explore__card a").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Impede o comportamento padrão do link
            
            // Obtém o nome do curso a partir do título <h4> mais próximo
            const courseName = this.closest(".explore__card").querySelector("h4").textContent.trim();
            
            // Rola para o formulário e preenche o curso
            scrollToFormAndSetValue(courseSelect, courseName);
        });
    });
});