document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
      {
        feedback: "Fazer o curso técnico de Administração na Avance Cursos foi uma experiência incrível! As aulas são  dinâmicas e voltadas para o mercado de trabalho. Consegui aplicar todos os aprendizados no meu estágio e já estou vendo os resultados! A equipe é super capacitada e pronta para ajudar. Se você busca um curso que prepara para o futuro, não perca tempo, venha para a Avance!",
        name: "Marcos da silva",
        role: "Curso Técnico de Administração",
        image: "assets/member.jpg",
        rating: 4.5
      },
      {
        feedback: "O curso de Informática foi transformador. A didática dos professores e o material didático me ajudaram a compreender os fundamentos da tecnologia. Hoje, estou empregado e aplico os conhecimentos adquiridos todos os dias!dshsdhjsuwuwuhuwhdhhhfhhshw hdfuhhsuhd uisdhashdh",
        name: "Diogo Mendes",
        role: "Tecnico de TI",
        image: "assets/member2.jpg",
        rating: 5
      },
      {
        feedback: "Concluir o curso técnico de Marketing na Avance Cursos foi a melhor decisão que tomei! O conteúdo é atualizado e aplicável, o que me fez entender de verdade como o mercado funciona. A estrutura da escola é ótima com laboratórios de última geração. Se você quer se destacar no mundo do marketing, não tem lugar melhor! Super recomendo!",
        name: "Ana Souza",
        role: "Curso Técnico de Marketing",
        image: "assets/member3.jpeg",
        rating: 5
      }
    ];
  
    let currentIndex = 0;
  
    const feedbackText = document.querySelector(".review__content p");
    const nameText = document.querySelector(".review__member__details h4");
    const roleText = document.querySelector(".review__member__details p");
    const imageElement = document.querySelector(".review__member img");
    const starsContainer = document.querySelector(".review__rating");
    const leftButton = document.querySelector(".review__nav span:first-child");
    const rightButton = document.querySelector(".review__nav span:last-child");
  
    function updateReview(index) {
      const review = reviews[index];
      feedbackText.textContent = `"${review.feedback}"`;
      nameText.textContent = review.name;
      roleText.textContent = review.role;
      imageElement.src = review.image;
      
      starsContainer.innerHTML = "";
      let fullStars = Math.floor(review.rating);
      let halfStar = review.rating % 1 !== 0;
  
      for (let i = 0; i < fullStars; i++) {
        starsContainer.innerHTML += '<span><i class="ri-star-fill"></i></span>';
      }
      if (halfStar) {
        starsContainer.innerHTML += '<span><i class="ri-star-half-fill"></i></span>';
      }
    }
  
    leftButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      updateReview(currentIndex);
    });
  
    rightButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % reviews.length;
      updateReview(currentIndex);
    });
  
    updateReview(currentIndex);
  });
  