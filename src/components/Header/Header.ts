// Treat file as ES module to avoid global scope conflicts
export {}

const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

// Update nav links based on current page
const currentPath = window.location.pathname;
const isHomePage = currentPath === '/' || currentPath === '/index.html';
const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-anchor]');

anchorLinks.forEach((link) => {
  const anchor = link.getAttribute('data-nav-anchor');
  
  if (anchor) {
    if (isHomePage) {
      link.href = `#${anchor}`;
      // Add smooth scroll for anchor links on home page
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.getElementById(anchor);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          // Update URL hash without jumping
          history.pushState(null, '', `#${anchor}`);
        }
      });
    } else {
      link.href = `/#${anchor}`;
    }
  }
});

// Handle page links (like /courses)
const pageLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-page]');
pageLinks.forEach((link) => {
  const navPage = link.getAttribute('data-nav-page');
  
  // Check if this link corresponds to current page
  if (navPage && currentPath === navPage) {
    link.classList.add('_active');
    link.removeAttribute('href');
    link.style.cursor = 'default';
    link.addEventListener('click', (e) => e.preventDefault());
  }
});

// Handle scroll to anchor on page load (when coming from another page)
const scrollToAnchorOnLoad = () => {
  const hash = window.location.hash;
  if (hash && isHomePage) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
};

// Run on page load
scrollToAnchorOnLoad();

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
