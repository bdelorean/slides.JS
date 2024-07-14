function initSlides(active = 3) { // slide-ul cu indexul 3 v-a avea din default clasa active 
  // Selectăm toate elementele cu clasa 'slide' și le stocăm în variabila 'slides'
  const slides = document.querySelectorAll(".slide");

  slides[active].classList.add('active'); //Accesăm elementul din slides aflat la poziția specificată de variabila active.

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
}
initSlides(); // vrei sa schimbi imaginea activa din default doar dai alt parametru aici in paranteze in loc de 3 pui 2 de exemplu