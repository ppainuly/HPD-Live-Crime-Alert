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




// var parser = new OpenLayer.Format.GeoJSON(),
//     features;

// new Shapefile({
//     shp: "Houston_Police_Division.shp",
//     dbf: "Houston_Police_Division.dbf"
// }, function (data) {
//     features = parser.read(h_town.geojson);
// });

// var shapefile = new L.Shapefile("Housotn_Police_Divisions.zip", {
//   onEachFeature: function(feature,layer) {
//     if (feature.properties) {
//       layer.bindPopup(Object.keys(feature.properties).map(function(k){
//         return k + ":" + feature.properties[k];
//       }))
//     }
//   }
// });

// shapefile.addTo(h_town_map);
// shapefile.once("data:loaded": function(){
//   console.log("finished loaded shapefile");
// });

 
// shapefile.open("Houston_Police_Division/HoustonPoliceDivision.shp")
//   .then(source => source.read()
//     .then(function log(result) {
//       if (result.done) return;
//       console.log(result.value);
//       return source.read().then(log);
//     }))
//   .catch(error => console.error(error.stack));

//   var Shapefile = new L.Shapefile("Houston_Police_Division.zip"); shpfile.addTo(h_town_map);

