function initMap() {
var mapDiv = document.getElementById('map');
var map = new google.maps.Map(mapDiv, {
  center: {lat: 22.9934, lng: 120.1979},
  zoom: 16
});
}