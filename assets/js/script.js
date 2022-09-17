// script pour le toggle button

const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('burger'),
      navClose = document.getElementById('nav-close')

      if(navToggle) {
        navToggle.addEventListener("click", () => {
          navMenu.classList.add('show-sidebar')
        })
      }

      if(navClose) {
        navClose.addEventListener("click", () => {
          navMenu.classList.remove('show-sidebar')
        })
      }