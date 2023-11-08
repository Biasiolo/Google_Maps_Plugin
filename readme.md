Google Maps Plugin

A simple jQuery plugin for embedding Google Maps with a marker on your website.

## Installation

To use this plugin, you can include it in your project via NPM:

```bash
npm install jquery-google-maps-plugin

Usage
Include jQuery and the plugin script in your HTML file.
html
Copy code
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="main.js"></script>

Create a <div> element where you want to display the map.
html
Copy code
<div id="map" style="height: 400px; width: 600px; margin: 5% auto;"></div>
Import the Google Maps API using your API key:
html
Copy code
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
Replace YOUR_API_KEY with your own Google Maps API key.

Initialize the map using the provided function initMap:
html
Copy code
<script>
  function initMap() {
    // Create a Map object
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    // Create a marker on the map
    var marker = new google.maps.Marker({
      position: { lat: -34.397, lng: 150.644 },
      map: map,
      title: 'My Marker'
    });
  }
</script>
You can customize the map center, zoom level, and marker title as needed.

## Usage
Include the necessary scripts and HTML elements as described in the installation section.

Customize the map settings by modifying the initMap function, such as changing the map center, zoom level, or marker title.

Access the map using the initMap function as a callback when the Google Maps API is loaded.

### License
This project is licensed under the MIT License.



