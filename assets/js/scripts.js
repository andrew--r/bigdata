$(document).ready(function() {
  var slider = $('#slider');

  slider.owlCarousel({
    items: 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
    navigation: true,
    pagination: true,
    navigationText: false,
    transitionStyle: "fade",
    slideSpeed: 400,
    autoHeight: true,
    responsive: true
  });
});