import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import '../styles/components/Map.css'

const Map = ({location}) => {

  const defaultCenter = [location.lat, location.lng]

  if(typeof location.lat === 'undefined' || typeof location.lng === 'undefined') return null

  return (
    <MapContainer center={defaultCenter} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter} />
    </MapContainer>
  );
}

export default Map