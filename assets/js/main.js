$('.gallery').each(function() {
  $(this).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled:true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });
});

$('.header__navigation-map').magnificPopup({
  type:'inline',
});
$('.header__navigation-text').magnificPopup({
  type:'inline',
});