var wildfire = L.layerGroup();
var volcanoe = L.layerGroup();
// need to work on getting title to print on makrer
// need to work on coloured markers -- and adding cluster plugin to work to improve slowdown
// need to work on how to clean up JS maybe make the main function a switch statment to prevent repeting of code needs more resherch
// add date slider

var mbAttr =
    //map api calls
    'Map data &copy; <a href="https://stadiamaps.com/">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://openmaptiles.org/">Mapbox</a>',
  mbUrl =
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=caaea1ed-2d6a-4476-ac6a-e8073e8f72aa"; //ok

var test = L.tileLayer(mbUrl, {
  //attributes for maps
  id: "mapbox/light-v9",
  tileSize: 512,
  zoomOffset: -1,
  attribution: mbAttr,
  minZoom: 2,
});

var map = L.map("map", {
  center: [51.5, 0.12],
  zoom: 3,
  layers: [test],
  maxBounds: [
    //south west
    [-90, -180],
    //north east
    [90, 180],
  ],
});

var baseLayers = {};

var overlays = {
  WildFire: wildfire,
  Volcanoe: volcanoe,
};

$(document).click(function () {
  //api call for nasa EONET
  $.getJSON(
    "https://eonet.gsfc.nasa.gov/api/v2.1/events?days=100",
    function (result) {
      //testing print api results to console
      console.log(result);
      // id for the choosen event in the api
      var Wildfire = 8;
      result.events.forEach(function (ev) {
        // if id is equal to wildfire(8) enter statment
        if (ev.categories[0].id === Wildfire) {
          //getting the lon and lats of the choosen id
          var lng = ev.geometries[0].coordinates[0];
          var lat = ev.geometries[0].coordinates[1];
          var fire = L.marker([lat, lng], {});
          //adding to the map layer wildfire for printing on map
          fire.addTo(wildfire);
          //testing for popups on markers Work in progress
          //want to get the title of disaster to appere on marker
          fire.bindPopup("wildfire");
        }
      });
    }
  );
});

$(document).click(function () {
  //api call for nasa EONET
  $.getJSON(
    "https://eonet.gsfc.nasa.gov/api/v2.1/events?days=100",
    function (result) {
      //testing print api results to console
      console.log(result);
      // id for the choosen event in the api
      var Volcanoe = 12;
      //getting the lon and lats of the choosen id
      result.events.forEach(function (ev) {
        if (ev.categories[0].id === Volcanoe) {
          var lng = ev.geometries[0].coordinates[0];
          var lat = ev.geometries[0].coordinates[1];
          //adding to the map layer volcanoe for printing on map
          var canoe = L.marker([lat, lng], {});
          //adding to the map layer wildfire for printing on map
          canoe.addTo(volcanoe);
          //testing for popups on markers Work in progress
          //want to get the title of disaster to appere on marker
          canoe.bindPopup("volcanoe");
        }
      });
    }
  );
});

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);
