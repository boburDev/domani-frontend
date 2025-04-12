"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

// Marker icon
const markerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconSize: [27, 35],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Location data
const locations = [
  { lat: 41.2995, lng: 69.2401, label: "Toshkent, O‘zbekiston" },
  { lat: 39.6542, lng: 66.9597, label: "Samarqand, O‘zbekiston" },
  { lat: 40.9983, lng: 71.6726, label: "Namangan, O‘zbekiston" },
  { lat: 40.7821, lng: 72.3442, label: "Andijon, O‘zbekiston" },
  { lat: 40.3894, lng: 71.7874, label: "Farg‘ona, O‘zbekiston" },
  { lat: 37.2242, lng: 67.2783, label: "Termiz, O‘zbekiston" },
  { lat: 40.0844, lng: 65.3792, label: "Navoiy, O‘zbekiston" },
  { lat: 43.7683, lng: 59.0012, label: "Qoraqalpog‘iston, O‘zbekiston" },
  { lat: 40.1236, lng: 67.828, label: "Jizzax, O‘zbekiston" },
  { lat: 61.524, lng: 105.3188, label: "Rossiya" },
  { lat: 37.0902, lng: -95.7129, label: "AQSH" },
  { lat: 48.0196, lng: 66.9237, label: "Qozog‘iston" },
  { lat: 38.861, lng: 71.2761, label: "Tojikiston" },
];

const center: LatLngExpression = [41.2995, 69.2401]; // Toshkent

// Custom Component: Enables scroll zoom only when CTRL is pressed
const ScrollZoomControl = () => {
  const map = useMap();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
      }
    };

    const container = map.getContainer();
    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [map]);

  return null;
};

const WorldMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);

  if (!mapLoaded) return null;

  return (
    <div className="w-full max-h-[728px] flex justify-center items-center">
      <MapContainer
        center={center}
        zoom={5}
        className="relative z-0 h-full w-full"
        style={{ height: "100%" }}
        minZoom={2}
        maxZoom={10}
        scrollWheelZoom={false}
        dragging={true}
        zoomControl={true}
        boxZoom={true}
        worldCopyJump={true} // <-- Add this!
        maxBounds={L.latLngBounds([
          [-60, -180],
          [85, 180],
        ])}
        maxBoundsViscosity={1.0}
      >
        {/* Our CTRL Zoom Handler */}
        <ScrollZoomControl />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          noWrap={false} // <-- Make sure this is false so it wraps horizontally
        />

        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lng]} icon={markerIcon}>
            <Popup>{loc.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
