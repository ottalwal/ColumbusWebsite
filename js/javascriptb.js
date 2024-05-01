window.addEventListener("DOMContentLoaded", (event) => {
  const menu = document.querySelector('#mobile_menu');
  const menuLinks = document.querySelector('.navbar_menu');
  const navLogo = document.querySelector('#navbar_logo');
  // Display Mobile Menu
  const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };

  menu.addEventListener('click', mobileMenu);
});

