// script.js

// Smooth scrolling for carousel (optional)
document.querySelectorAll('.carousel').forEach(carousel => {
    carousel.addEventListener('wheel', (e) => {
      e.preventDefault();
      carousel.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
      });
    });
  });