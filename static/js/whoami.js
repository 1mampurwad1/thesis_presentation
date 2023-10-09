// Create a map centered on Europe
var map; // Declare map variable globally
map = L.map('map').setView([51.1657, 10.4515], 4);
        
// Add a tile layer (you can use different tile layers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define marker coordinates for Enschede, Netherlands, and Brisbane, Australia
var enschedeMarker = L.marker([52.223958730491624, 6.886185818666876]).addTo(map);
var brisbaneMarker = L.marker([-27.500487076806465, 153.01430728697466]).addTo(map);
var palembangMarker = L.marker([-2.9917491079339165, 104.7633999352887]).addTo(map);
enschedeMarker._icon.classList.add("enschede");
brisbaneMarker._icon.classList.add("brisbane");
palembangMarker._icon.classList.add("home");

// Add click event listeners to markers to show city info divs
enschedeMarker.on('click', function () {
    showCityInfo('enschede-info');
});

palembangMarker.on('click', function () {
    showCityInfo('palembang-info');
});

brisbaneMarker.on('click', function () {
    showCityInfo('brisbane-info');
});

// Function to display city info div by id
function showCityInfo(cityInfoId) {
    var cityInfoDivs = document.querySelectorAll('.city-info');
    cityInfoDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    var cityInfo = document.getElementById(cityInfoId);
    if (cityInfo) {
        cityInfo.style.display = 'block';
    }
}

// Create a group for the markers and add it to the map
var markers = L.layerGroup([enschedeMarker, brisbaneMarker, palembangMarker]);
markers.addTo(map);

// Create a layer control for toggling markers
var baseLayers = {
    "Map": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
};

var overlays = {
    "Markers": markers,
};

var markerLatLngs = [
enschedeMarker.getLatLng(),
brisbaneMarker.getLatLng(),
palembangMarker.getLatLng()
];

var polylineLatLngs = [
    enschedeMarker.getLatLng(),
    palembangMarker.getLatLng(),
    brisbaneMarker.getLatLng()
];

// Create a polyline and add it to the map
var polyline = L.polyline(markerLatLngs, { color: 'black' }).addTo(map);

// Fit the map view to the bounds of the markers
map.fitBounds(markerLatLngs);
