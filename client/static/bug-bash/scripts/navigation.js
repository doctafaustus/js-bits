const nav = document.querySelector('nav');
const burgerBtn = nav.querySelector('.burger-icon');
const closeBtn = nav.querySelector('.menu-close');

burgerBtn.addEventListener('click', () => toggleBurgerMenu('add'));
closeBtn.addEventListener('click', () => toggleBurgerMenu('remove'));

function toggleBurgerMenu(method) {
  nav.classList[method]('open');
}

const minicartBtn = document.querySelector('.minicart');
const minicartContainer = document.querySelector('.minicart-container');
const minicartClass = '.minicart';

minicartBtn.addEventListener('click', openMiniCart);
document.addEventListener('click', closeMinicart);

function openMiniCart(e) {
  if (minicartContainer.classList.contains('active')) {
    toggleMinicart('remove');
  } else {
    toggleMinicart('add');
    google_analytics.push('minicart-opened');
  }
}

function closeMinicart(e) {
  const hasAncestor = e.target.closest(minicartClass);
  const isTarget = e.target.matches(minicartClass);
  if (hasAncestor || isTarget) return;

  toggleMinicart('remove');
}

function toggleMinicart(method) {
  minicartContainer.classList[method]('active');
}