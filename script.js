const map = L.map("map").setView([35.70015230480259, 51.33811941768732], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const marker1 = L.marker([35.70067925761257, 51.334383904794876]).addTo(map)
const marker2 = L.marker([35.702169104559204, 51.33321446165123]).addTo(map)
const marker3 = L.marker([35.70001709448055, 51.331530034370935]).addTo(map)
const marker4 = L.marker([35.69982539865595, 51.33806387492573]).addTo(map)

const line = L.polygon([
  [35.70067925761257, 51.334383904794876],
  [35.702169104559204, 51.33321446165123],
  [35.70001709448055, 51.331530034370935],
], {
  color: 'blue',
  fillColor: 'red',
  fillOpacity: 0.3,
}).addTo(map)


const circle = L.circle([35.69982539865595, 51.33806387492573], {
  radius: 200,
  color: 'red',
}).addTo(map)