$(() => {
  var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          iconSize: [29,43]
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            37.62825965881348,
            55.73074102854723
          ]
        }
      }
    ]
  }

  mapboxgl.accessToken = 'pk.eyJ1IjoieGtvcmVkZXVzIiwiYSI6ImNrbGtxcmoybzNmMGIydnM4MWs5ZXo5cmMifQ._YIlgXTnQtUtNubeZg81dg';

  if ( $(window).width() > 996 ) {
    centerPosition = [
      37.632057666778564,
      55.730481255119734]
  } else {
    centerPosition = [
      37.62949347496033,
      55.73034230583267];
  }

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/xkoredeus/cklkrgmef0qsx17mlzyqyo3ga',
    center: centerPosition,
    zoom: 16,
    attributionControl: false
  });

  // add markers to map
  geojson.features.forEach(function (marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage =
        'url(assets/img/balloon.svg)';
    el.style.width = marker.properties.iconSize[0] + 'px';
    el.style.height = marker.properties.iconSize[1] + 'px';

    // add marker to map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
  });

  var elInner = $('.balloon__content');
  $('.marker').append(elInner);
});
