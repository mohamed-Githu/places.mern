import { IconButton, Tooltip, Typography } from "@material-ui/core";

import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Map from "@material-ui/icons/Map";

import {
  PlacesActions,
  PlacesContent,
  PlacesCard,
  MediaContainer,
} from "./styles";

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
