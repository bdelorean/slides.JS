// Selectăm toate elementele cu clasa 'slide' și le stocăm în variabila 'slides'
const slides = document.querySelectorAll(".slide");
// Iterăm prin fiecare element 'slide' din 'slides'
for (const slide of slides) {
  slide.addEventListener("click", () => {
    // Când un 'slide' este click-uit, apelăm funcția 'clearActiveSlides'
    clearActiveSlides();
    // Adăugăm clasa 'active' la slide-ul care a fost click-uit
    slide.classList.add("active");
  });
}

// Funcție pentru a elimina clasa 'active' de la toate slide-urile
function clearActiveSlides() {
  // Iterăm prin fiecare element 'slide' din 'slides'
  slides.forEach((slide) => {
    // Eliminăm clasa 'active' de la elementul curent
    slide.classList.remove("active");
  });
}
