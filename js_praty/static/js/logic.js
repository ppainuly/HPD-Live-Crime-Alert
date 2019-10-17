// Create a map object
console.log("Beginning project");
var myMap = L.map("map", {
    center: [29.7604, -95.4998],
    zoom: 10
  });

  // var htxIcon = new L.Icon({
  //   iconUrl: '../img/icons8-policeman-female-40.png',
  //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  //   iconSize: [30, 30],
  //   iconAnchor: [12, 41],
  //   popupAnchor: [1, -34],
  //   shadowSize: [35, 35]
  // });
  // let marker3 = L.marker([29.760427, -95.369804],{icon: htxIcon}).addTo(myMap);
  //   marker3.bindPopup("Houston")



  
  //Add a tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  var sidebar = L.control.sidebar('sidebar').addTo(myMap);


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
      stationName: "Clear Lake", 
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
     iconUrl: '../static/img/icons8-policeman-female-40.png',
     shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
     iconSize: [30, 30],
     iconAnchor: [12, 41],
     popupAnchor: [1, -34],
     shadowSize: [35, 35]
    });  
    console.log(station.location)
    L.marker(station.location, {icon: policeWomanIcon}) 
      .bindPopup("<h1>" + station.stationName + "</h1> <hr> <h4>Address & Info - </h4><p>" + station.legend + "</p>")
      .addTo(myMap);
  }
  
  // An array containing each city's time, location, and address
  // var incidents = [{
  //   location: [29.61469,-95.217551],
  //   time: "10/10/2019 23:05",
  //   type:"TRAFFIC HAZARD/NON URGENT",
  //   address: "11400 FUQUA ST"
  // },
  // {
  //   location: [29.8414568627451,-95.4991699019608],
  //   time: "10/10/2019 22:38",
  //   type:"CRASH/MAJOR/NON FATAL",
  //   address: "13098 COOPERS HAWK DR"
  // },
  // {
  //   location: [29.790866,-95.549237],
  //   time: "10/10/2019 22:38",
  //   type:"CRASH/MINOR",
  //   address: "20698 ALDINE WESTFIELD RD"
  // },
  // {
  //   location: [29.6053344,-95.4772572],
  //   time: "10/10/2019 22:31",
  //   type:"CRASH/MAJOR/NON FATAL",
  //   address: "7200 PINEMONT DR"
  // },
  // {
  //   location: [29.613215,-95.445998],
  //   time: "10/10/2019 22:30",
  //   type:"TRAFFIC HAZARD/NON URGENT",
  //   address: "10200 WESTVIEW DR"
  // }
  // ];


//   //3d map
//   var myMap = L.eeGeo.map('map', API_KEY_3D, {
//     center: incidents[0].location,
//     zoom: 15
//   });
//   myMap.themes.setTheme(
//     L.eeGeo.themes.season.Autumn,
//     L.eeGeo.themes.time.Day,
//     L.eeGeo.themes.weather.Clear
// );
let latlon = []
let markerArray = []
let popup = []
let incidentType = []


  d3.json('/api/incidents').then(function(incidents){
    console.log("Begin Incident function")
    //console.log(response)



  
  // Loop through the incidents array and create one marker for each incident, bind a popup containing its time,type and address add it to the map
      incidents.forEach(function(incident,i){
        console.log(incident);
        console.log(i)
        //L.marker(incident.location).addTo(map);
        let type = "";
        latlon.push(incident.location)
        //$('.list-group').httml = ""
        incidentType.push(incident.type)
        if(incident.type.startsWith("CRASH")){
          console.log(incident.type);
          const liElements = $(`<a href="#" class="list-group-item list-group-item-action"><li class="d-flex justify-content-between align-items-center"><img src='../static/img/icons8-car-100v2.png' alt="Car Incident" height="32" width="32">
          ${incident.address.toUpperCase() }<span style="background:#990000;" class="badge badge-primary badge-pill">${i+1}</span></li></a>`);
          $('.list-group').append(liElements);
          var car = new L.Icon({
            iconUrl: '../static/img/icons8-car-100v2.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [32, 32],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [37, 37]
           });  

          L.marker(incident.location, {icon: car})
            .bindPopup("<h3>" + incident.type + "</h3>   <hr><h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>")
            .addTo(myMap);
          popup.push("<h3>" + incident.type + "</h3> <hr> <h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>");
          markerArray.push(L.marker(incident.location))
        } else if(incident.type.startsWith("TRAFFIC")){
          console.log(incident.type);
            console.log("TRAFFIC"); //icons8-under-construction-64
            const liElements = $(`<a href="#" class="list-group-item list-group-item-action"><li class="d-flex justify-content-between align-items-center"><img src='../static/img/icons8-under-construction-64.png' alt="Car Incident" height="32" width="32">
            ${incident.address.toUpperCase() }<span style="background:#990000;" class="badge badge-primary badge-pill">${i+1}</span></li></a>`);
            $('.list-group').append(liElements);
            var traffic = new L.Icon({
              iconUrl: '../static/img/icons8-under-construction-64.png',
              shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
              iconSize: [32, 32],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [37, 37]
             });  

            L.marker(incident.location, {icon: traffic})
              .bindPopup("<h3>" + incident.type + "</h3>   <hr><h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>")
              .addTo(myMap);
            popup.push("<h3>" + incident.type + "</h3> <hr> <h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>");
            markerArray.push(L.marker(incident.location))
        } else{
          const liElements = $(`<a href="#" class="list-group-item list-group-item-action"><li class="d-flex justify-content-between align-items-center"><img src='../static/img/icons8-handcuffs-50.png' alt="Crime Incident" height="32" width="32">
          ${incident.address.toUpperCase() }<span style="background:#990000;" class="badge badge-primary badge-pill">${i+1}</span></li></a>`);
          $('.list-group').append(liElements);
          var traffic = new L.Icon({
            iconUrl: '../static/img/icons8-handcuffs-50.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [32, 32],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [37, 37]
           });  

          L.marker(incident.location, {icon: traffic})
            .bindPopup("<h3>" + incident.type + "</h3>   <hr><h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>")
            .addTo(myMap);
          popup.push("<h3>" + incident.type + "</h3> <hr> <h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>");
          markerArray.push(L.marker(incident.location))

        }
        // const liElements = $(`<a href="#" class="list-group-item list-group-item-action"><li class="d-flex justify-content-between align-items-center"><img src='../static/img/icons8-car-100v2.png' alt="Car Incident" height="32" width="32">
        // ${incident.type }<span style="background:#990000;" class="badge badge-primary badge-pill">${i+1}</span></li></a>`);
        // $('.list-group').append(liElements);
        //3d map and marker
        // myMap.setView(incidents[0].location, 16, {headingDegrees: 204.374, tiltDegrees:15.0});
        // var marker = L.eeGeo.marker(incident.location, {
        //     elevation: 260.0,
        //     title: "Incident"
        //   }).addTo(myMap);
    
        //   marker.bindPopup("<h1>" + incident.time + "</h1> <hr> <h3>address " + incident.address + "</h3> <hr> <h4>address " + incident.type + "</h4>").openPopup();
         //markerArray.push(L.marker(incident.location))
        //  L.marker(incident.location)
        //    .bindPopup("<h1>" + incident.time + "</h1> <hr> <h3>address " + incident.address + "</h3> <hr> <h4>address " + incident.type + "</h4>")
        //    .addTo(myMap);

          //  var numMarker = L.ExtraMarkers.icon({
          //   icon: 'fa-number',
          //   number: i+1,
          //   markerColor: 'red'
          //   }); //icons8-car-100

            // var car = new L.Icon({
            //   iconUrl: '../static/img/icons8-car-100v2.png',
            //   shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            //   iconSize: [32, 32],
            //   iconAnchor: [12, 41],
            //   popupAnchor: [1, -34],
            //   shadowSize: [37, 37]
            //  });  

            // L.marker(incident.location, {icon: car})
            //   .bindPopup("<h3>" + incident.type + "</h3>   <hr><h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>")
            //   .addTo(myMap);
            // popup.push("<h3>" + incident.type + "</h3> <hr> <h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>");

      });

      let markerActive;


      $('.list-group-item').bind('mouseover',function(){
        console.log("Event clicked")
        var index = $( "a" ).index( this ) - 3;

        latlang = markerArray[index-1].getLatLng()
        // var numMarker = L.ExtraMarkers.icon({
        //   icon: 'fa-number',
        //   number: index,
        //   markerColor: 'yellow'
        //   }); icons8-car-100hover.png
        if(incidentType[index-1].startsWith("CRASH")){

        var iconHover = new L.Icon({
          iconUrl: '../static/img/icons8-car-100v2hover.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [32, 32],
          iconAnchor: [11, 41],
          popupAnchor: [1, -34],
          shadowSize: [46, 46],
         });  

      }else if(incidentType[index-1].startsWith("TRAFFIC")){
        var iconHover = new L.Icon({
          iconUrl: '../static/img/icons8-under-construction-64hover.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [32, 32],
          iconAnchor: [11, 41],
          popupAnchor: [1, -34],
          shadowSize: [46, 46],
         });  
      } else{
        var iconHover = new L.Icon({
          iconUrl: '../static/img/icons8-handcuffs-50hover.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [32, 32],
          iconAnchor: [11, 41],
          popupAnchor: [1, -34],
          shadowSize: [46, 46],

        });
      }
      markerActive = new L.Marker(latlang, {icon: iconHover});
      myMap.addLayer(markerActive);
      myMap.panTo(latlang);
      markerActive.bindPopup(popup[index-1]).openPopup();

    

        });
        $('.list-group-item').bind('mouseout',function(){
          console.log("Event unclicked")
          var index = $( "a" ).index( this ) - 4;
          myMap.removeLayer(markerActive)
          });


        (function blink() {
            $('.blink_me').fadeOut(700).fadeIn(700, blink);
        })();
        blink_me

        

        

        //Resizing the map
      // var mapmargin = 50;
      // $('#map').css("height", ($(window).height() - mapmargin));
      // $(window).on("resize", resize);
      // resize();
      // function resize(){

      //     if($(window).width()>=980){
      //         $('#map').css("height", ($(window).height() - mapmargin));    
      //         $('#map').css("margin-top",50);
      //     }else{
      //         $('#map').css("height", ($(window).height() - (mapmargin+12)));    
      //         $('#map').css("margin-top",-21);
      //     }

      // }

    });