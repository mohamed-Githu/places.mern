import {
  IconButton,
  Tooltip,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@material-ui/core";

import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Map from "@material-ui/icons/Map";

const MediaContainer = styled(CardMedia)(({ theme }) => ({
  height: "15rem",
  [theme.breakpoints.up("lg")]: {
    height: "20rem",
  },
}));

const PlacesActions = styled(CardActions)({
  padding: "1rem .5rem",
  borderTop: "1px solid #888888",
  display: "flex",
  "& *:first-child": {
    marginRight: "auto",
  },
});

const PlacesContent = styled(CardContent)({
  padding: "2rem",
  "& *": {
    textAlign: "center",
    marginBottom: ".5rem",
    fontWeight: 700,
    fontSize: "1.5rem",
  },
  "& *:last-child": {
    fontWeight: 400,
    fontSize: "1rem",
  },
  "& *:nth-child(2)": {
    fontSize: "1.1rem",
  },
});

const PlacesCard = styled(Card)(({ theme }) => ({
  width: "40rem",
  maxWidth: "100%",
  marginBottom: "4rem",
  [theme.breakpoints.down("xs")]: {
    borderRadius: 0,
  },
}));

const PlacesItem = ({ title, description, imageUrl, address }) => (
  <PlacesCard>
    <MediaContainer image={imageUrl} title={title} />
    <PlacesContent>
      <Typography>{title}</Typography>
      <Typography>{address}</Typography>
      <Typography>{description}</Typography>
    </PlacesContent>
    <PlacesActions>
      <Tooltip title="View location on map">
        <IconButton>
          <Map />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit place post">
        <IconButton>
          <Edit />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete place post">
        <IconButton>
          <Delete />
        </IconButton>
      </Tooltip>
    </PlacesActions>
  </PlacesCard>
);

export default PlacesItem;
