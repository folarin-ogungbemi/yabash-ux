// Code Institute guide
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      // Berlin Latitude and Longitude
      center: { lat: 52.501408, lng: 13.4023285 },
    });
    // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Alexanderplatz Latitude and Longitude
  const locations = [{lat: 52.521992, lng:13.413244}]
  // Add some markers to the map.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({ 
      position : location,
      label : labels[i % labels.length]
    });
  });
    // CDN from Google Maps Platform "Marker Clustering"
    // Add a marker clusterer to manage the markers.
    new markerClusterer.MarkerClusterer({ map, markers });
}