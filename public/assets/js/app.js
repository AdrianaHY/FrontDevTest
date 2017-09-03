var cargarPagina = function(){
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
}

var map;
var infowindow;
var initMap = function(){
  //se crea un mapa con las coordenadas actuales
  navigator.geolocation.getCurrentPosition(function(pos){
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    var myLatIng = new google.maps.LatLng(lat, lon);
    var mapOptions =
    center: myLatIng,
    zoom:14,
    mapTypeId: google.maps.mapTypeId.SATELLITE
  })
}

$(document).ready(cargarPagina);
