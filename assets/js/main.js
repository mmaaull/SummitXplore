// Inisialisasi peta
const map = L.map('map').setView([-2.5489, 118.0149], 5); // Pusat Indonesia

// Tile layer dari OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Tambah marker contoh
const places = [
  {
    name: 'Gunung Bromo',
    coords: [-7.202734, 112.875]
  },
  {
    name: 'Gunung Rinjani',
    coords: [-8.4167, 116.4667]
  },
  {
    name: 'Gunung Semeru',
    coords: [-8.106702, 112.920441]
  },
  {
    name: 'Gunung Prau',
    coords: [-7.1113, 109.5522]
  }
];

places.forEach(place => {
  L.marker(place.coords)
    .addTo(map)
    .bindPopup(`<strong>${place.name}</strong><br>${place.info}`);
});
