let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
        
    }),
);

var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([26.9855629621565, 75.85135075967881])
.addTo(map);

var img1 = document.querySelector("#victoria")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([22.545392826098894, 88.34264363042112])
.addTo(map);

var img1 = document.querySelector("#gateway")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([18.922916899795304, 72.83469676813104])
.addTo(map);

var img1 = document.querySelector("#gate")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([28.61313802130302, 77.22958479717248])
.addTo(map);

var img1 = document.querySelector("#lotus")
var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([28.553708725215078, 77.25956668498452])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    }).on('result', function(e) {
        destination = e.result.center
    })
);

$(function (){
    $("#navigate-button").click(function (){
        window.location.href = 'ar_weather.html?source=${latitude};${longitude}&destination[0]}'
    })
})

