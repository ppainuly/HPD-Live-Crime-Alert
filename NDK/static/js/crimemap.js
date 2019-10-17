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
        .bindPopup("<h2>" + response[i].parent_incident_type +
        "</h2><hr><p>" + response[i].address_1 + "<p>" + response[i].incident_datetime));
      }
  
    }
  
    // Add our marker cluster layer to the map
  crimeMap.addLayer(markers);
  
});

var link = "data/h_town.geojson";

  // Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(crimeMap);
});

var stations = [
  {
    stationName: "Bush IAH Airport", 
    location: [29.987264528300944, -95.34582612004576], 
    address: "3100 Terminal Road North", 
    legend: "Airport-IAH Division - Districts 21 - 3100 Terminal Rd. North - (281) 230-6800"
  }, 
  {
    stationName: "Central", 
    location: [29.764874534712266, -95.3707253452462], 
    address: "61 Riesner St", 
    legend: "Central Division - Districts 1 & 2 - 61 Riesner St. - (713) 247-440"
  },
  {
    stationName: "Central", 
    location: [29.764874534712266, -95.3707253452462], 
    address: "61 Riesner St", 
    legend: "Central Division - Districts 1 & 2 - 61 Riesner St. - (713) 247-440"
  },

  {
    stationName: "Clear Lake'", 
    location: [29.57953957534573, -95.10646398910244], 
    address: "2855 Bay Area Blvd", 
    legend: "Clear Lake Division - District 12 - 2855 Bay Area Blvd. - (832) 395-1777"
  },

  {
    stationName: "Downtown", 
    location: [29.7537251915145, -95.35601230351529], 
    address: "1900 Rusk St", 
    legend: "Downtown Division - Beat 1A10 -  1900 Rusk - (832) 394-0000"
  },

  {
    stationName: "Eastside", 
    location: [29.73430910602781, -95.29004563881392], 
    address: "7525 Sherman", 
    legend: "Eastside Division - District 11 - 7525 Sherman - (832) 395-1580"
  },

  {
    stationName: "Kingwood", 
    location: [30.05463728306788, -95.18825960279793], 
    address: "3915 Rustic Woods Dr", 
    legend: "Kingwood Division - District 24 - 3915 Rustic Wood Dr. - (832) 395-1800"
  },

  {
    stationName: "Midwest", 
    location: [29.71667641699483, -95.51153144965537], 
    address: "7277 Regency Square Blvd", 
    legend: "Midwest Division - District 18 - 7277 Regency Square Blvd - (832) 394-1200"
  },

  {
    stationName: "North", 
    location: [29.879534160445672, -95.4469385491213], 
    address: "9455 W Montgomery Rd", 
    legend: "North Division - Districts 3 & 6 - 9455 W. Montgomery - (832) 394 -3800"
  },

  {
    stationName: "North Belt",
    location: [29.95147068350088, -95.4199241978885], 
    address: "100 Glenborough Dr", 
    legend: "North Belt Division - District 22 - 100 Glenborough Dr - (832) 394-4900"
  },

  {
    stationName: "Northeast", 
    location: [29.83226408342705, -95.27337679363981], 
    address: "8301 Ley Rd", 
    legend: "Northeast Division - Districts 7,  8, & 9 - 8301 Ley Rd. - (832) 395-1500"
  },

  {
    stationName: "Northwest", 
    location: [29.857041766092586, -95.5398015093995], 
    address: "6000 Teague Road", 
    legend: "Northwest Division - Districts 4 & 5 - 6000 Teague Rd. - (832) 394-5500"
  },

  {
    stationName: "Police Headquarters", 
    location: [29.755772339900112, -95.36751369860828], 
    address: "1200 Travis St", 
    legend: "Police Headquarters - 1200 Travis - (713) 308-1200"
  },

  {
    stationName: "South Central", 
    location: [29.742877655942078, -95.3628099860077], 
    address: "2202 St. Emanuel", 
    legend: "South Central Division - District 10 - 2202 St. Emanuel - (832) 394-0300"
  },

  {
    stationName: "South Gessner", 
    location: [29.649543810405692, -95.52840400465658], 
    address: "8605 Westplace Dr", 
    legend: "South Gessner Division - District 17 - 8605 West Place Dr. - (832) 394-4700"
  },

  {
    stationName: "Southeast", 
    location: [29.657384448022874, -95.3168111128208], 
    address: "8300 Mykawa", 
    legend: "Southeast Division - Districts 13 & 14 - 8300 Mykawa - (832) 394-1600"
  },

  {
    stationName: "Southwest", 
    location: [29.63704163472314, -95.45711234272345], 
    address: "13097 Nitida St", 
    legend: "Southwest Division - Districts 15 & 16 - 13097 Nitida St.  - (832) 394-0400"
  },

  {
    stationName: "Westside", 
    location: [29.727476147598914, -95.60486678242556], 
    address: "3203 S Dairy Ashford", 
    legend: "Westside Division - Districts 19 & 20 - 3203 S. Dairy Ashford - (832) 394-5600"
  },

  {
    stationName: "William P. Hobby Airport", 
    location: [29.65408531758694, -95.27665426232514], 
    address: "7800 Airport Blvd", 
    legend: "Airport-Hobby Division - Districts 23 - 7800 Airport Blvd - (713) 845-6800"
  }
];

for (var i = 0; i < stations.length; i++) {
  var station = stations[i];
  var policeWomanIcon = new L.Icon({
    iconUrl: 'data/policeFemale.png',
    // shadowUrl: 'https://i7.pngguru.com/preview/616/398/526/circle-gradient-cartesian-coordinate-system-shadow-shadows.jpg',
    iconSize: [20, 20],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });  
  console.log(station.location)
  L.marker(station.location, {icon: policeWomanIcon}) 
    .bindPopup("<h1>" + station.stationName + "</h1> <hr> <h3>Address & Info: " + station.legend + "</h3>")
    .addTo(crimeMap);
};

  