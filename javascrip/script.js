
  let currentSlide = 0;
  const slides = document.querySelectorAll('.banner.slide');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 5000); // Cambia cada 5 segundos
     
        // Funcionalidad para abrir y cerrar el menú hamburguesa
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeBtn = document.getElementById('close-btn');

        hamburgerIcon.addEventListener('click', () => {
            mobileMenu.style.display = 'block';
        });

        closeBtn.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });

        // funcionalidad para carrousel de card//

        const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
    
    // Obtener todos los elementos con la clase 'submenu'
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(submenu => {
        const submenuItems = submenu.querySelector('.submenu-items');

        // Cuando el mouse entra en el área del submenú, mostrar los items
        submenu.addEventListener('mouseenter', () => {
            submenuItems.style.display = 'block';
        });

        // Cuando el mouse sale del área del submenú, ocultar los items
        submenu.addEventListener('mouseleave', () => {
            submenuItems.style.display = 'none';
        });
    });
