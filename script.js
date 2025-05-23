const map = L.map('map').setView([39.2, -120], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

// Add sample markers
L.marker([39.325, -120.23]).addTo(map).bindPopup("Donner Memorial State Park");
L.marker([39.343, -120.27]).addTo(map).bindPopup("Tahoe Donner XC Ski Area");
