// //working on pulling API from Crimemap//

// // Creating map object
// var crimeMap = L.map("map", {
//     center: [29.7604, -95.3698],
//     zoom: 11
//   });
  
//   // Adding tile layer to the map
//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   }).addTo(crimeMap);

//   // Grabbing our GeoJSON data..
// d3.json(link, function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data).addTo(map);
// });

  
  // // Store API query variables
  // var baseURL = "https://moto.data.socrata.com/resource/p6kq-vsa3.geojson";
  // var date = "$where=incident_datetime between'2018-01-01T12:00:00' and '2019-10-10T14:00:00'";
  // var limit = "&$limit=1000";
  
  
  // // Assemble API query URL
  // var url = baseURL + date + limit;
  
  // // Grab the data with d3
  // d3.json(url, response => {
  
  //   // Create a new marker cluster group
  //   let markers = L.markerClusterGroup();
  
  //   // Loop through data
  //   for (var i = 0; i < response.length; i++) {
  
  //     // Set the data location property to a variable
  //     var location = response[i].location;
  
  //     // Check for location property
  //     if (location) {
  
  //       // Add a new marker to the cluster group and bind a pop-up
  //       markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
  //         .bindPopup(response[i].descriptor));
  //     }
  
  //   }
  
  //   // Add our marker cluster layer to the map
  //   crimeMap.addLayer(markers);
  
  // });
  
  var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 13
  });
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  var url = "https://moto.data.socrata.com/resource/p6kq-vsa3.json?$limit=10000";
  
  d3.json(url, function(response) {
  
    console.log(response);
  
    var heatArray = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i].location;
  
      if (location) {
        heatArray.push([location.coordinates[1], location.coordinates[0]]);
      }
    }
  
    var heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  
  });
  