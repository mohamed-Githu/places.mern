import { useState } from "react";
import { Tooltip, Typography } from "@material-ui/core";

import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Map from "@material-ui/icons/Map";

import {
  PlacesActions,
  PlacesContent,
  PlacesCard,
  MediaContainer,
} from "../styles";
import MapModal from "./MapModal";
import { IconWrapper } from "../../../shared/layout";

const PlacesItem = ({ title, description, imageUrl, address, location }) => {
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen(!open);

  return (
    <>
      <PlacesCard>
        <MediaContainer image={imageUrl} title={title} />
        <PlacesContent>
          <Typography>{title}</Typography>
          <Typography>{address}</Typography>
          <Typography>{description}</Typography>
        </PlacesContent>
        <PlacesActions>
          <Tooltip title="View location on map" onClick={handleModal}>
            <IconWrapper>
              <Map />
            </IconWrapper>
          </Tooltip>
          <Tooltip title="Edit place post">
            <IconWrapper>
              <Edit />
            </IconWrapper>
          </Tooltip>
          <Tooltip title="Delete place post">
            <IconWrapper>
              <Delete />
            </IconWrapper>
          </Tooltip>
        </PlacesActions>
      </PlacesCard>
      <MapModal
        open={open}
        onClose={handleModal}
        address={address}
        center={location}
      />
    </>
  );
};

export default PlacesItem;
