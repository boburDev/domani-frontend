import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

const markerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [27, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const locations = [
  { lat: 41.2995, lng: 69.2401, label: "Tashkent, Uzbekistan" },
  { lat: 39.6542, lng: 66.9597, label: "Samarqand, Uzbekistan" },
  { lat: 40.9983, lng: 71.6726, label: "Namangan, Uzbekistan" },
  { lat: 40.7821, lng: 72.3442, label: "Andijon, Uzbekistan" },
  { lat: 40.3894, lng: 71.7874, label: "Farg'ona, Uzbekistan" },
  { lat: 37.2242, lng: 67.2783, label: "Termiz, Uzbekistan" },
  { lat: 40.0844, lng: 65.3792, label: "Navoiy, Uzbekistan" },
  { lat: 43.7683, lng: 59.0012, label: "Qoraqalpog'iston, Uzbekistan" },
  { lat: 40.1236, lng: 67.828, label: "Jizzax, Uzbekistan" },
  { lat: 61.524, lng: 105.3188, label: "Russia" },
  { lat: 37.0902, lng: -95.7129, label: "USA" },
  { lat: 48.0196, lng: 66.9237, label: "Kazakhstan" },
  { lat: 38.861, lng: 71.2761, label: "Tajikistan" },
];

const center: LatLngExpression = [20, 0];

const WorldMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  // Wheel hodisasi faqat Ctrl + Scroll bosilganda zoom qilish uchun
 

  if (!mapLoaded) return null;

  return (
    <MapContainer
      center={center}
      style={{ height: "80%", width: "80%" }}
      className="relative z-0"
      minZoom={2} // Minimal zoom darajasi
      maxZoom={10} // Maksimal zoom darajasi
      dragging={false} // Xarita ustida drag qilishni bloklash
      scrollWheelZoom={false} // Scroll orqali zoom qilishni bloklash
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]} icon={markerIcon}>
          <Popup>{loc.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap;
