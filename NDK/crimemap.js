//working on pulling API from Crimemap//

// Creating map object
var crimeMap = L.map("map", {
    center: [29.7604, -95.3698],
    zoom: 11
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(crimeMap);
  
//   // Store API query variables
//   var baseURL = "https://moto.data.socrata.com/resource/p6kq-vsa3.json";
//   var date = "$where=incident_datetime between'2018-01-01T12:00:00' and '2019-10-10T14:00:00'";
//   var limit = "&$limit=1000";
  
//   // Assemble API query URL
//   var url = baseURL + date + limit;
  
//   // Grab the data with d3
//   d3.json(url, response => {
  
//     // Create a new marker cluster group
//     let markers = L.markerClusterGroup();
  
//     // Loop through data
//     for (var i = 0; i < response.length; i++) {
  
//       // Set the data location property to a variable
//       var location = response[i].location;
  
//       // Check for location property
//       if (location) {
  
//         // Add a new marker to the cluster group and bind a pop-up
//         markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
//           .bindPopup(response[i].descriptor));
//       }
  
//     }
  
//     // Add our marker cluster layer to the map
//     crimeMap.addLayer(markers);
  
//   });
  