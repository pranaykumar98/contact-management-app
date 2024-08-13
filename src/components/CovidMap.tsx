import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const fetchCountriesData = async () => {
  try {
    const { data } = await axios.get(
      "https://disease.sh/v3/covid-19/countries"
    );
    return data;
  } catch (error: any) {
    console.log(error.message);
  }
};

const CovidMap: React.FC = () => {
  const { data, error, isLoading } = useQuery(
    "countriesData",
    fetchCountriesData
  );

  const position: LatLngExpression = [51.505, -0.09]; // Specify the center position with correct typing

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <MapContainer center={position} zoom={2} style={{ height: "400px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Array.isArray(data) &&
        data.map((country: any) => (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Active: {country.active}</p>
                <p>Recovered: {country.recovered}</p>
                <p>Deaths: {country.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
};

export default CovidMap;
