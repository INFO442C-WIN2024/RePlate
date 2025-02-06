import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import Header from './Header';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

// Fix for default marker icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapView = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Convert string addresses to coordinates (you'll need to add real coordinates to your restaurant data)
  const locations = restaurants.map(restaurant => ({
    ...restaurant,
    position: {
      lat: 47.6616 + (Math.random() - 0.5) * 0.01, // Demo random positions
      lng: -122.3132 + (Math.random() - 0.5) * 0.01
    }
  }));

  const defaultCenter = {
    lat: 47.6616, // Seattle UW area coordinates
    lng: -122.3132
  };

  return (
    <div className="map-view">
      <Header />
      <div className="view-toggle">
        <Link to="/" className="view-button">List View</Link>
        <Link to="/map" className="view-button active">Map View</Link>
      </div>
      
      <div className="map-container">
        <MapContainer 
          center={defaultCenter} 
          zoom={14} 
          style={{ height: "calc(100vh - 120px)", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map(restaurant => (
            <Marker
              key={restaurant.id}
              position={[restaurant.position.lat, restaurant.position.lng]}
              eventHandlers={{
                click: () => setSelectedRestaurant(restaurant),
              }}
            >
              <Popup>
                <div className="map-popup">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="popup-image"
                  />
                  <h3>{restaurant.name}</h3>
                  <p>{restaurant.location}</p>
                  <Link 
                    to={`/restaurant/${restaurant.id}`}
                    className="view-restaurant-button"
                  >
                    View Restaurant
                  </Link>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView; 