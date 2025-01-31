const sliderContainer = document.querySelector('.slider__container');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const firstSlide = slides[0];
const lastSlide = slides[totalSlides - 1];
const firstClone = firstSlide.cloneNode(true);
const lastClone = lastSlide.cloneNode(true);

sliderContainer.appendChild(firstClone);
sliderContainer.insertBefore(lastClone, firstSlide);

let currentIndex = 1;
const slideWidth = slides[0].clientWidth;

sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

function moveToNextSlide() {
  if (currentIndex >= totalSlides + 1) return;
  currentIndex++;
  sliderContainer.style.transition = 'transform 0.7s ease-in-out';
  sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function moveToPrevSlide() {
  if (currentIndex <= 0) return;
  currentIndex--;
  sliderContainer.style.transition = 'transform 0.7s ease-in-out';
  sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

sliderContainer.addEventListener('transitionend', () => {
  if (currentIndex === totalSlides + 1) {
    currentIndex = 1;
    sliderContainer.style.transition = 'none';
    sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }
  if (currentIndex === 0) {
    currentIndex = totalSlides;
    sliderContainer.style.transition = 'none';
    sliderContainer.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }
});

setInterval(moveToNextSlide, 3000);