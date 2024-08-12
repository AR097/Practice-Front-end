//Home
document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.home-slideshow img');
    let currentSlide = 0;
    const slideInterval = 10000;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    slides[currentSlide].classList.add('active');
    setInterval(nextSlide, slideInterval);
});

//menu

function toggleMenu() {
    const filterButtons = document.querySelector('.filter-buttons');
    filterButtons.style.display = filterButtons.style.display === 'flex' ? 'none' : 'flex';
  }

  // Fechar o menu ao clicar em um botão de filtro
  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      if (window.innerWidth <= 600) {
        const filterButtons = document.querySelector('.filter-buttons');
        filterButtons.style.display = 'none';
      }
    });
  });

//depoimento
//pass row image
let currentSlideIndex = 0;
const depoimentos = document.querySelectorAll('.box-depoimento');
const dots = document.querySelectorAll('.dot');
const slideInterval = 5000; // Intervalo de 5 segundos

function showSlide(index) {
    depoimentos.forEach((depoimento, i) => {
        depoimento.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % depoimentos.length;
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlideIndex);
    setInterval(nextSlide, slideInterval);
});

//mural da arte
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');

          const filter = button.getAttribute('data-filter');

          galleryItems.forEach(item => {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Trigger click on the 'All' button to display all items on load
  document.querySelector('.filter-btn[data-filter="all"]').click();
});
