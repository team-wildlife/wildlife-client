// TO-DO: Attach this map to a <div> on all pages with a CSS width/height set at 100%(?) and (maybe?) a z-index of -1, effectively turning it into a dynamic background image. Set lat/lng properties on all drop-down menu values. Set drop-down menu to feed lat/lng to localStorage.
//This is the gmaps creator. It requires gmaps' token be set on the server side. It JSON.parseInt's the localStorage variables 'lat' and 'lng' (NO CAPS) as lat.val and lng.val. It hard-coded offsets the image to shift 'left' by adding 18degs longitude, which at this zoom level seems to shift to where we need it to be and SHOULD work regardless of viewport pixel width. It needs lat.val/lng.val to be a number -- there may be a way to set these as strings using the ({lat: 'string', lng: 'string'}) syntax, but for now, passing in data type numbers works, so I'm sticking to it. The mapProp key/value pairs make sure the map is a hybrid style (satellite plus labels), with a set zoom level, without the ability for the user to change the view, that shows only country borders. So long as this function has access to the gmaps API w/ token, jQuery, and the two values set, it'll work.
// gmaps API link: <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCmP-O1bCwngC_XqyfvIyjWpXLa46gAt9o&callback=myMap"></script>
let lat = {}
lat.val = JSON.parse(localStorage.getItem('lat'));
let lng = {}
lng.val = JSON.parse(localStorage.getItem('lng'));
function initMap() {
  var mapProp= {
    center:new google.maps.LatLng(lat.val, (lng.val + 18)),
    zoom:5,
    mapTypeControl: false,
    disableDefaultUI: true,
    draggable: false,
    mapTypeId: 'hybrid',
    styles: [
      {
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'administrative',
        'stylers': [
          {
            'visibility': 'on'
          }
        ]
      },
      {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'administrative',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'administrative.country',
        'elementType': 'geometry.fill',
        'stylers': [
          {
            'visibility': 'simplified'
          }
        ]
      },
      {
        'featureType': 'landscape',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'poi',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      }
    ]
  };
  var map = new google.maps.Map(document.getElementById('gmaps'), mapProp);
}
