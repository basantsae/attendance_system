import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent = ({ location }) => {
  const map = useMap();

  // Set the zoom level to 18 for a closer view
  if (location) {
    map.setView(location, 18);
  }

  return null;
};

const EditAreas = () => {
  const [areaName, setAreaName] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [location, setLocation] = useState(null);
  const navigate = useNavigate();

  const handleAreaChange = (e) => {
    setAreaName(e.target.value);
  };

  const handleSearch = () => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${areaName}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const { lat, lon, display_name } = data[0];
          setLocation([parseFloat(lat), parseFloat(lon)]);
          setFullAddress(display_name);
        } else {
          alert('Location not found.');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleAddArea = () => {
    const area = {
      name: areaName,
      fullAddress,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    localStorage.setItem('savedArea', JSON.stringify(area));
    navigate('/edit-list');
  };

  return (
    <div>
      <input
        type="text"
        value={areaName}
        onChange={handleAreaChange}
        placeholder="Enter area name (e.g., سموحه)"
      />
      <button onClick={handleSearch}>
        Search <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        value={fullAddress}
        readOnly
        placeholder="Full address will be displayed here"
        style={{ marginTop: '10px' }}
      />
      <MapContainer center={[31.2156, 29.9553]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {location && <Marker position={location} icon={customIcon} />}
        {location && <MapComponent location={location} />}
      </MapContainer>
      <button onClick={handleAddArea} style={{ marginTop: '10px' }}>
        Add
      </button>
    </div>
  );
};

export default EditAreas;
