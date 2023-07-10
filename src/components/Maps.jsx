import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { Circle } from "react-leaflet/Circle";
import { CircleMarker } from "react-leaflet/CircleMarker";
import { Polyline } from "react-leaflet/Polyline";
import { Polygon } from "react-leaflet/Polygon";
import { Rectangle } from "react-leaflet/Rectangle";
import { GeoJSON } from "react-leaflet/GeoJSON";
import "leaflet/dist/leaflet.css";

import { statesData } from "../assets/geojson/us-states";
import { mexico } from "../assets/geojson/mexico";
import { estados } from "../assets/geojson/estados";
import { municipios } from '../assets/geojson/municipios';
import './styles/Maps.css';

const Maps = () => {
  const center = [24.231086, -102.441822];


  function getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  layer.bringToFront();
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}

function resetHighlight(e) {
  geojson.resetStyle(e.target);
}
  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };
  return (
    <MapContainer className='leaflet-container' center={center} zoom={5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Circle center={center} pathOptions={fillBlueOptions} radius={200} />
      <CircleMarker
        center={[51.51, -0.12]}
        pathOptions={redOptions}
        radius={20}
      >
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Polyline pathOptions={limeOptions} positions={polyline} />
      <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      <Polygon pathOptions={purpleOptions} positions={polygon} />
      <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}

      <GeoJSON data={mexico} pathOptions={style}/>
      <GeoJSON data={estados} pathOptions={style}/>

    </MapContainer>
  );
};

export default Maps;
