const heroImages = [
  "https://img.youtube.com/vi/YetNejat0Mg/maxresdefault.jpg",
  "https://img.youtube.com/vi/8hWPu7GdEjA/maxresdefault.jpg",
  "../assets/thumb-esports101.jpg"
];

const carousel = document.getElementById("heroCarousel");
const dotsContainer = document.getElementById("carouselDots");

heroImages.forEach((image, index) => {
  const item = document.createElement("div");

  item.className = "carousel-item";

  item.innerHTML = `
    <img src="${image}" alt="Trabalho de edição ${index + 1}">
  `;

  carousel.appendChild(item);

  // Cria os dots
  const dot = document.createElement("button");

  dot.className = "carousel-dot";

  dot.addEventListener("click", () => {
    currentSlide = index;
    updateCarousel();
  });

  dotsContainer.appendChild(dot);
});

let currentSlide = 0;

function updateCarousel() {
  const items = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".carousel-dot");

  const total = items.length;

  items.forEach((item, index) => {
    let position = index - currentSlide;

    // Corrige a posição circular
    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    item.className = "carousel-item";

    if (position === 0) {
      item.classList.add("center");
    } else if (position === -1) {
      item.classList.add("left");
    } else if (position === 1) {
      item.classList.add("right");
    } else {
      item.classList.add("hidden");
    }
  });

  // Atualiza o dot ativo
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % heroImages.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + heroImages.length) % heroImages.length;

  updateCarousel();
}

document
  .getElementById("nextSlide")
  .addEventListener("click", nextSlide);

document
  .getElementById("prevSlide")
  .addEventListener("click", prevSlide);

updateCarousel();

setInterval(nextSlide, 10000);