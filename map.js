function initMap() {
    var market = { lat: 22.9934, lng: 120.1979 };
    var mapDiv = document.getElementById('map');

    var map = new google.maps.Map(mapDiv, {
        center: market,
        zoom: 16
    });

    var marker = new google.maps.Marker({
        position: market,
        map: map,
        title: 'intro1',
        icon:"img/pin.png"
    });

    google.maps.event.addListener(marker, 'click', function () {
        $(".info").fadeIn();
    });

    $(".here-btn").click(function () {
        map.setCenter(market);
    });
}







