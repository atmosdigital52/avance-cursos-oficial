document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
      {
        feedback: "O curso de Atendente de Farmácia foi excelente! Aprendi muito sobre atendimento ao cliente, manuseio de medicamentos e ética profissional. As aulas práticas me prepararam bem para o mercado de trabalho e hoje me sinto confiante para atuar com segurança e qualidade. Recomendo a todos que buscam se destacar na área!",
        name: "Jane Cooper",
        role: "Atendente de Farmácia",
        image: "assets/member.jpg",
        rating: 4.5
      },
      {
        feedback: "O curso de Informática foi transformador. A didática dos professores e o material didático me ajudaram a compreender os fundamentos da tecnologia. Hoje, estou empregado e aplico os conhecimentos adquiridos todos os dias!dshsdhjsuwuwuhuwhdhhhfhhshw hdfuhhsuhd uisdhashdh",
        name: "Carlos Mendes",
        role: "Tecnico de TI",
        image: "assets/member2.jpg",
        rating: 5
      },
      {
        feedback: "Excelente curso de Administração! Os professores são muito capacitados e o conteúdo foi essencial para minha carreira. Aprendi sobre gestão, finanças e liderança, o que me ajudou a conquistar um ótimo emprego!ghifiadijwijd nisdjiawdjiwjdiaw  idjwidjaijdiaj idjwijdiajdiguuwehiwdf fhdjsjdkjskj ksdjskdj",
        name: "Mariana Souza",
        role: "Administradora",
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
  