"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import "leaflet.awesome-markers";
const markerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [27, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Sample marker locations
const locations = [
  { lat: 40.7128, lng: -74.006, label: "New York, USA" },
  { lat: 51.5074, lng: -0.1278, label: "London, UK" },
  { lat: 48.8566, lng: 2.3522, label: "Paris, France" },
  { lat: 52.52, lng: 13.405, label: "Berlin, Germany" },
  { lat: 55.7558, lng: 37.6173, label: "Moscow, Russia" },
  { lat: 41.0082, lng: 28.9784, label: "Istanbul, Turkey" },
  { lat: 41.2995, lng: 69.2401, label: "Tashkent, Uzbekistan" },
  { lat: 43.222, lng: 76.8512, label: "Almaty, Kazakhstan" },
  { lat: 39.9042, lng: 116.4074, label: "Beijing, China" },
];

const center: LatLngExpression = [20, 0];

export default function WorldMap() {
  return (
    <MapContainer
      center={center}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
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
}
