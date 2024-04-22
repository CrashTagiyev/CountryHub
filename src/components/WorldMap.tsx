import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { WorldMapProps } from '../Interfaces/WorldMapInterface';

const WorldMap: React.FC<WorldMapProps> = ({ latlng1, latlng2 }) => {
  return (
    <MapContainer
      center={[latlng1, latlng2]}
      zoom={4.5}
    
      style={{ height: '600px', width: '800px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
};

export default WorldMap;
