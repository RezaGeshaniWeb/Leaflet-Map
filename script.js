// set tag id
// set Set the latitude and longitude of the location
// Setting the initial zoom level (1, 18)
const map = L.map("map").setView([35.70015230480259, 51.33811941768732], 15);

// get api & set map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
