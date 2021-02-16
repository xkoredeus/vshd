$(() => {
  ymaps.ready(init);
  var myMap;
  var myPlacemark;
  var centerPosition;

  if ( $(window).width() < 768 ) {
    centerPosition = [55.730138, 37.628312];
  } else {
    centerPosition = [55.729843, 37.632404]
  }

  function init(){
    myMap = new ymaps.Map("map", {
      center: centerPosition,
      zoom: 16,
      // scrollZoom: false,
      controls: [],
      disableDefaultUI: true
    });
    // myMap.behaviors.disable('drag');
    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark(
        [55.730637, 37.628164],
        {
          balloonContent: '<div class="balloon__content"><div class="balloon__address"><span>VOS’HOD</span><span>Валовая ул., 26</span></div><div class="balloon__name">БЦ Lighthouse</div></div>',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: 'assets/img/balloon.svg',
          iconImageSize: [29, 42],
          iconImageOffset: [-14, -24],

          balloonLayout: "default#imageWithContent",
          balloonImageHref: 'assets/img/balloon.svg',
          balloonImageOffset: [0, 0],
          balloonImageSize: [29, 42],
          balloonOffset: [-15, -25],
          balloonShadow: false,
        },
        {
          balloonCloseButton: false,
          hideIconOnBalloonOpen: false,
        }
    );

    myMap.geoObjects.add(myPlacemark);
    // console.log()
    myPlacemark.balloon.open()
  }
});
