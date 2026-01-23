// Treat file as ES module to avoid global scope conflicts
export {}

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

if (burger && headerNav && header) {
  burger.addEventListener('click', () => {
    const isOpen = header.classList.toggle('header--open');
    burger.setAttribute('aria-expanded', String(isOpen));
    burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  headerNav.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('header--open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    });
  });
}
