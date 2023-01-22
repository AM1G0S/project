$(document).ready(function () {
  $('.slider').slick({
    accessibility: true,
    arrows: false, 
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnFocus: true,
    speed: 200,
  });
});
