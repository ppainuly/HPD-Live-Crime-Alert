// Create a map object
var crimeMap = L.map("map", {
  center: [29.710, -95.376],
  zoom: 10
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(crimeMap);

// Store API query variables
var baseURL = "https://moto.data.socrata.com/resource/p6kq-vsa3.json";
// var date = "$where=incident_datetime between'2018-01-01T12:00:00' and '2019-10-10T14:00:00'";
// var incident = "$where=incident_type_primary"
// var limit = "&$limit=100";
  
  
  // Assemble API query URL
// var url = baseURL + date + limit;
// console.log(url)
  
  // Grab the data with d3
d3.json(baseURL, response => {
  
    // Create a new marker cluster group
  let markers = L.markerClusterGroup();
  
console.log(response)
console.log(response.length)

    // Loop through data
  for (var i = 0; i <= 100; i++) {
  
      // Set the data location property to a variable
    var location = response[i].location;
  
      // Check for location property
    if (location) {
  
        // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
        .bindPopup(response[i].incident_type_primary));
      }
  
    }
  
    // Add our marker cluster layer to the map
  crimeMap.addLayer(markers);
  
  });
  
  