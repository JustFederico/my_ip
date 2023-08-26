import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";



function App() {
  const [ipInfo, setIpInfo] = useState({});
  const apiKey = "https://geo.ipify.org/api/v1?apiKey=at_h9Jsc937IBuSlew2cu4y3IFFzW4sP";
  const key = import.meta.env.VITE_KEY



  

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=${key}`)
      .then((response) => response.json())
      .then((data) => {
        setIpInfo(data);
      });
  }, []);

  console.log(ipInfo)
  console.log(key)
  return (
    <div className="App">
      <h1>IP Information</h1>
      <p>IP Address: {ipInfo.ip}</p>
      <p>Country: {ipInfo.location?.country}</p>
      <p>Region: {ipInfo.location?.region}</p>
      <p>City: {ipInfo.location?.city}</p>
      <p>Timezone: {ipInfo.location?.timezone}</p>

      {Object.keys(ipInfo).length > 0 && Object.keys(ipInfo.location).length > 0 ? (<MapContainer center={[ipInfo.location?.lat, ipInfo.location?.lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[ipInfo.location?.lat, ipInfo.location?.lng]}>
          <Popup>Your Location</Popup>
        </Marker>
      </MapContainer>): null }

      {/* */}


    </div>
  );
}
export default App;

  