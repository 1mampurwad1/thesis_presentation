var bangkamap;
bangkamap = L.map('bangkamap').setView([51.1657, 10.4515], 4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(bangkamap);

var topLeft = L.latLng(-1.036132660635567, 104.37350177592182);
var bottomRight = L.latLng(-3.3401580092437957, 107.06235830343265);

// Define the coordinates for the rectangle's vertices
var coordinates = [
    [topLeft.lat, topLeft.lng],
    [topLeft.lat, bottomRight.lng],
    [bottomRight.lat, bottomRight.lng],
    [bottomRight.lat, topLeft.lng],
    [topLeft.lat, topLeft.lng] // Close the polygon by repeating the first vertex
];


var palembangMarker = L.marker([-2.182787211288796, 106.0508706586274]).addTo(bangkamap);

// Fit the map to the bounds of the polygon
var polygon = L.polygon(coordinates);
bangkamap.fitBounds(polygon.getBounds());
