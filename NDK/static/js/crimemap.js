
{
  location: [29.7604, -95.3698],
  name: "Houston",
  population: "2,296,224"
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
},
{
  location: [41.2524, -95.9980],
  name: "Omaha",
  population: "446,599"
},
{
  location: [46.8772, -96.7898],
  name: "Fargo",
  population: "245,571"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
}

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
  
  