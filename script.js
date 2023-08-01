const carousel = document.querySelector(".carousel");
const slides = document.querySelector(".slides");
const slideWidth = carousel.offsetWidth;
let index = 0;
let autoSlideInterval;

function showSlide() {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
}

function changeSlide(step) {
  index += step;
  if (index >= slides.children.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.children.length - 1;
  }

  showSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1);
  }, 2000); // Intervalo de 2 segundos
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

carousel.addEventListener("mouseover", stopAutoSlide);
carousel.addEventListener("mouseout", startAutoSlide);

startAutoSlide();
