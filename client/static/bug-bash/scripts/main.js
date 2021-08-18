window.mobileMediaQuery = '(max-width: 767px)';


document.addEventListener('click', trackCTAs);
function trackCTAs(e) {
  if (e.target.matches('.cta')) {
    e.preventDefault();
    google_analytics.push('cta-clicked');
  }
}






const slickSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
};

const $clientSlider = $('.client-slider');
$clientSlider.slick(slickSettings);
$clientSlider.on('afterChange', () => {
  const mediaQueryList = window.matchMedia(mobileMediaQuery);
  if (mediaQueryList.matches) $clientSlider[0].scrollIntoView();
});

$(document).ready(function() {
  $('.clients-reset').click(function() {
    $clientSlider.slick('slickGoTo', 0);
  });
});


renderGemList();
const gemCardImages = document.querySelectorAll('.card-image');
gemCardImages.forEach(image => {
  image.addEventListener('click', toggleGemImageZoom);
});

function toggleGemImageZoom(e) {
  e.target.closest('.gem-card').classList.toggle('zoom');
}


function renderGemList() {
  const gemGrid = document.querySelector('.gem-grid');
  const gemGridHTML = window.gems.map((gemObj, i) => {
    const overflowClass = (i >= 12) ? 'overflow' : '';
    return `<div class="gem-card ${overflowClass}">
      <div class="card-title-price">
        <div class="card-title">${gemObj.title}</div>
        <div class="card-price">${gemObj.price}</div>
      </div>
      <div class="card-image-container">
        <img class="card-image" src="https://res.cloudinary.com/dzynqn10l/image/upload/v1629166095/Bug%20Bash/${gemObj.image}">
      </div>
    </div>`;
  }).join('');
  gemGrid.innerHTML = gemGridHTML;
}

document.querySelectorAll('.gem-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    const direction = (btn.dataset.sort === 'a-z') ? -1 : 1;

    window.gems.sort((a, b) => {
      if (a.title < b.title) return direction;
      else if (a.title > b.title) return -1 * direction;
      else return 0;
    });

    renderGemList();
  });
});


const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', () => {
  const gemCards = document.querySelectorAll('.gem-card');
  gemCards.forEach(card => card.classList.remove('overflow'));
  loadMore.style.display = 'none';
});



document.addEventListener('DOMContentLoaded', () => {
  const timeout = 3000; 

  setTimeout(setShippingStatus, timeout);
  const freeShipping = getShippingStatus();
  if (freeShipping) showBanner();
});

function setShippingStatus() {
  window.shipping = true;
}

function showBanner() {
  document.body.classList.add('show-banner');
}

function getShippingStatus() {
  return Boolean(shipping);
}


const VIPLevels = {
  pearl: 'pearl',
  platinum: 'platinum',
  emerald: 'emerald',
  gold: 'gold',
  default: function() { return this.pearl }
};

function showVIPLevel() {
  const VIPLevel = getVIPCookieVal() || VIPLevels.default();
  const blockToShow = document.querySelector(`.${VIPLevel}`);
  blockToShow.classList.add('show');
}

function getVIPCookieVal() {
  return getCookie('vipCustomerLevel');
}

// Set VIP cookie to platinum on load
window.setCookie('vipCustomerLevel', VIPLevels.platinum);
showVIPLevel();


const quickAdd = document.querySelector('.gotd-cta');
quickAdd.addEventListener('click', initStripe);

function initStripe() {
  if (window.location.pathname === '/bug-bash/gem-wizard' &&
      !window.StripeCheckout) {
    document.head.insertAdjacentHTML('beforeend', `<script src="https://checkout.stripe.com/checkout.js">`);
    addToCart();
  }
}

function addToCart() {
  StripeCheckout.addProduct = ({ name }) => { 
    alert(`${name} added to cart!`);
  };

  const product = { name: 'Gem of the Day', price: '100e' }
  StripeCheckout.addProduct(product);
}


const copyrightYear = document.querySelector('.copyright-year');
copyrightYear.textContent = new Date().getFullYear(); 