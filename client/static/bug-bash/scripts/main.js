const gemCards = document.querySelectorAll('.gem-card');
gemCards.forEach(card => {
  card.addEventListener('click', toggleZoom);
});

function toggleZoom(e) {
  const card = (e.target.matches('.gem-card')) ?
    e.target : e.target.closest('.gem-card');
  const zoomClass = 'zoom';

  if (!card.classList.contains(zoomClass)) {
    google_analytics.push('card-clicked');
  }
  
  card.classList.toggle(zoomClass);
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

$('.client-slider').slick(slickSettings);

$(document).ready(function() {
  $('.clients-reset').click(function() {
    $('.client-slider').slick('slickGoTo', 0);
  });
});




const copyrightYear = document.querySelector('.copyright-year');
copyrightYear.textContent = new Date().getFullYear(); 