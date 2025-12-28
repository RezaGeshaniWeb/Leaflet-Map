const map = L.map("map").setView([35.70015230480259, 51.33811941768732], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// project-osrm.org

const point1 = [35.704065544779105, 51.10967164109585];
const point2 = [35.707550374942485, 51.22794632644294];

const marker1 = L.marker(point1).addTo(map);
const marker2 = L.marker(point2).addTo(map);

const url = `http://router.project-osrm.org/route/v1/driving/${point1[1]},${point1[0]};${point2[1], point2[0]}?overview=false`;

fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));
