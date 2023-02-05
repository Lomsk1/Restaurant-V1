"use client";

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import shad from "leaflet/dist/images/marker-shadow.png";
// import Mar from "leaflet/dist/images/marker-icon-2x.png";

interface Mar {
  mar: string;
}

function MapBox() {
  const mar =
    "https://static.vecteezy.com/system/resources/previews/009/385/892/original/pin-location-icon-sign-free-png.png";
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapBox;
