import { styled, useTheme } from '@material-ui/core';
import { Circle, MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'


const LeafLet = styled("div")(({ theme }) => ({
  height: "30rem",
  width: "100%",
  [theme.breakpoints.down("xs")]: {
    height: "90vh",
  },
  "& .leaflet-container": {
    height: "100%",
  }
}))


const Map = ({ zoom = 5, center }) => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  
  return (
  <LeafLet>
    <MapContainer zoom={zoom} center={center} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Circle 
          center={center} 
          radius={50000} 
          fillColor={secondary} 
          color={primary}
        />
    </MapContainer>
  </LeafLet>
)};

export default Map;
