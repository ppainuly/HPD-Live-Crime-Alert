// Shapefiles: police stations and districts

// creating map of Houston: 
// Creating map object
var h_town_map = L.map("map", {
    center: [29.7604, -95.3698],
    zoom: 11
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(h_town_map);


var link = "data.h_town.geojson";

  // Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(h_town_map);
});

var parser = new OpenLayer.Format.GeoJSON(),
    features;

new Shapefile({
    shp: "myshape.shp",
    dbf: "myshape.dbf"
}, function (data) {
    features = parser.read(data.geojson);
});

