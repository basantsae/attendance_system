import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useForm } from 'react-hook-form';
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
  const { register, formState: { errors } } = useForm();


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
    navigate('/edit-list');}

  //   const onSubmit = (data) => {
  //     if (isEdit) {
  //       editUser({ ...data, id: parseInt(id, 10), image });
  //     } else {
  //       addUser({ ...data, image });
  //     }
  //     navigate('/admin/users');
  //   };
  // };

  return (
    <div className="content p-4">
      <div className="content-header">
        <h1>Edit Areas</h1>
      </div>
      <div className="attendance-content">
        <div className="attendance-title">
          <h1>Add Area</h1>
        </div>
        <hr />
        <div className="profile-container">
          <form className="user-form">
            <div className="user">
              <label>Area Name</label>
              <div style={{ width: "100%" ,display: "flex",gap: "20px"}}>
                <input
                type="text"
                className="control-form"
                value={areaName}
                onChange={handleAreaChange}
                placeholder="Enter area name (e.g., سموحه)"
                style={{width:"75%"}}
                {...register('username', { required: true })}
                />
                <div>
                <button onClick={handleSearch} style={{width:"300px"}}>
                <i className="fas fa-search"></i>
                  Search 
                </button>
              </div>
              </div>
              {/* <div>
                <button onClick={handleSearch} style={{width:"100px"}}>
                <i className="fas fa-search"></i>
                  Search 
                </button>
              </div> */}
            </div>

            <div className="user">
            <label>Area address</label>
              <div style={{ width: "100%" }}>
              <input
                type="text"
                className="control-form"
                value={fullAddress}
                readOnly
                placeholder="Full address will be displayed here"
                style={{ marginTop: '10px' }}
              />{errors.email }
            </div>
            </div>   

            <MapContainer center={[31.2156, 29.9553]} zoom={13} style={{ height: '400px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {location && <Marker position={location} icon={customIcon} />}
              {location && <MapComponent location={location} />}
            </MapContainer>

        <button onClick={handleAddArea} style={{ marginTop: '10px' }}>
          Add Area
        </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default EditAreas;
