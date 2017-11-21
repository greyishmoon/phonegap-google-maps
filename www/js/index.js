//when the jQuery Mobile page is initialised
//$(document).on('pageinit', onLoad);
//
//function onLoad() {
//    alert ("LOAD");
//}

var map;

// Called from googleapi hook
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
}