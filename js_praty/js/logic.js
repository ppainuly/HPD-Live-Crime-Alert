// Create a map object
console.log("Beginning project");
var myMap = L.map("map", {
    center: [29.7604, -95.3698],
    zoom: 10
  });


  
  //Add a tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  var sidebar = L.control.sidebar('sidebar').addTo(myMap);
  
  // An array containing each city's time, location, and address
  var incidents = [{
    location: [29.61469,-95.217551],
    time: "10/10/2019 23:05",
    type:"TRAFFIC HAZARD/NON URGENT",
    address: "11400 FUQUA ST"
  },
  {
    location: [29.8414568627451,-95.4991699019608],
    time: "10/10/2019 22:38",
    type:"CRASH/MAJOR/NON FATAL",
    address: "13098 COOPERS HAWK DR"
  },
  {
    location: [29.790866,-95.549237],
    time: "10/10/2019 22:38",
    type:"CRASH/MINOR",
    address: "20698 ALDINE WESTFIELD RD"
  },
  {
    location: [29.6053344,-95.4772572],
    time: "10/10/2019 22:31",
    type:"CRASH/MAJOR/NON FATAL",
    address: "7200 PINEMONT DR"
  },
  {
    location: [29.613215,-95.445998],
    time: "10/10/2019 22:30",
    type:"TRAFFIC HAZARD/NON URGENT",
    address: "10200 WESTVIEW DR"
  }
  ];


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
  
  // Loop through the incidents array and create one marker for each incident, bind a popup containing its time,type and address add it to the map
      incidents.forEach(function(incident,i){
        console.log(incident);
        console.log(i)
        //L.marker(incident.location).addTo(map);

        latlon.push(incident.location)
        $('.list-group').httml = ""
        const liElements = $(`<a href="#" class="list-group-item list-group-item-action"><li class="d-flex justify-content-between align-items-center">
        ${incident.type }<span style="background:#0066cc;" class="badge badge-primary badge-pill">${i+1}</span></li></a>`);
        $('.list-group').append(liElements);
        //3d map and marker
        // myMap.setView(incidents[0].location, 16, {headingDegrees: 204.374, tiltDegrees:15.0});
        // var marker = L.eeGeo.marker(incident.location, {
        //     elevation: 260.0,
        //     title: "Incident"
        //   }).addTo(myMap);
    
        //   marker.bindPopup("<h1>" + incident.time + "</h1> <hr> <h3>address " + incident.address + "</h3> <hr> <h4>address " + incident.type + "</h4>").openPopup();
         markerArray.push(L.marker(incident.location))
        //  L.marker(incident.location)
        //    .bindPopup("<h1>" + incident.time + "</h1> <hr> <h3>address " + incident.address + "</h3> <hr> <h4>address " + incident.type + "</h4>")
        //    .addTo(myMap);

           var numMarker = L.ExtraMarkers.icon({
            icon: 'fa-number',
            number: i+1,
            markerColor: 'blue'
            });
            L.marker(incident.location, {icon: numMarker})
              .bindPopup("<h3>" + incident.type + "</h3>   <hr><h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>")
              .addTo(myMap);
            popup.push("<h3>" + incident.type + "</h3> <hr> <h4>" + incident.address + "</h4> <hr> <h4>" + incident.time + "</h4>");

      });
      console.log(latlon)

      let markerActive;


      $('.list-group-item').bind('mouseover',function(){
        console.log("Event clicked")
        var index = $( "a" ).index( this ) - 4;
        console.log( "That was a index #" + index )
        console.log(markerArray[index-1])
        latlang = markerArray[index-1].getLatLng()
        var numMarker = L.ExtraMarkers.icon({
          icon: 'fa-number',
          number: index,
          markerColor: 'yellow'
          });
          console.log(latlang)
        marker = new L.Marker(latlang, {icon: numMarker});
        myMap.addLayer(marker);
        myMap.panTo(latlang);
        marker.bindPopup(popup[index-1]).openPopup();
    

        });
        $('.list-group-item').bind('mouseout',function(){
          console.log("Event unclicked")
          var index = $( "a" ).index( this ) - 4;
          console.log( "That was a index #" + index )
          myMap.removeLayer(marker)
          });

        (function blink() {
            $('.blink_me').fadeOut(700).fadeIn(700, blink);
        })();


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



  