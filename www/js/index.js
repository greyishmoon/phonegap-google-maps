var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });

    setTimeout(function () {
        google.maps.event.trigger(map, 'resize');
    }, 500);
}




//when the jQuery Mobile page is initialised
$(document).on('pageinit', onLoad);

function onLoad() {
//    initMap();
}