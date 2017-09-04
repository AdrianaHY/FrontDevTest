var cargarPagina = function(){
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  initMap();
}

var map;
var initMap = function(){
  map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: -34.397, lng: 150.644},
         zoom: 8
       });

}

//PALABRA PALÍNDROMA
var str= "";
var strSeparado = str.split("");
var strReves = strSeparado.reverse()

function palindromo(str){
  if(strSeparado === strReves){
    console.log("Tu palabra es palíndroma!")
  }else{
    console.log("Lo siento, introduce otra palabra :()")
  }
}
// var map;
// var infowindow;

// var initMap = function(){
//   //se crea un mapa con las coordenadas actuales
//   navigator.geolocation.getCurrentPosition(function(pos){
//
//     lat = pos.coords.latitude;
//     lon = pos.coords.longitude;
//
//     var myLatlng = new google.maps.LatLng (lat, lon);
//
//     var mapOptions = {
//       center: myLatlng,
//       zoom: 14,
//       mapTypeId: google.maps.mapTypeId.SATELLITE
//     };
//
//     map = new
//     google.maps.Map(document.getElementById('mapamapOptions'));
//
//     //Creamos el infowindow
//     infowindow = new google.maps.InfoWindow();
//
//     //Se especifica la localización, el radio y el tipo de lugar a buscar
//     var request = {
//       location: myLatlng,
//       radius: 10000,
//       types: ['hospital']
//     };
//
//     //se crea el servicio place service y se envía la petición
//     var service = new google.maps.places.PlaceService(map);
//
//     service.nearbySearch(request, function(results, status){
//       if(status === google.maps.places.PlacesServiceStatus.OK){
//         for(var i = 0; i < results.length; i++){
//           crearMarcador(results[i]);
//         }
//       }
//     });
//   });
// }
//
// var crearMarcador = function(place){
//   //se crea un marcador
//   var marker = new google.maps.Marker({
//     map:map,
//     position: place.geometry.location
//   });
//
//   //Asignamos el evento click del marcador
//   google.maps.event.addListener(marker, 'click', function(){
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }
$(document).ready(cargarPagina);
