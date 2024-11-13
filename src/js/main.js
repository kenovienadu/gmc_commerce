const mobileMenu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.menu-close-btn');

const toggleMenu = () => {
  const isMobile = window.innerWidth < 768;
  if (!isMobile) {
    return;
  }

  mobileMenu.classList.toggle('menu-close');
}

hamburger.addEventListener('click', () => toggleMenu())
closeBtn.addEventListener('click', () => toggleMenu())

window.addEventListener('resize', () => {
  mobileMenu.classList.add('menu-close');
})