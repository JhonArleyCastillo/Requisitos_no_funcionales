  // JavaScript para actualizar la clase activa en el menú de navegación
    document.addEventListener('DOMContentLoaded', function() {
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', function() {
          navLinks.forEach(nav => nav.classList.remove('active'));
          this.classList.add('active');
        });
      });

      // JavaScript para mantener el item activo en función de la sección visible
      window.addEventListener('scroll', function() {
        const fromTop = window.scrollY + 65; // ajusta la altura del navbar
        navLinks.forEach(link => {
          const section = document.querySelector(link.hash);
          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      });
    });
