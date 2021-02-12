import { useReducer } from "react";
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
import EditModal from "./EditModal";
import { IconWrapper } from "../../../shared/layout";
import modalsReducer, { INITIAL_STATE } from "../modalsReducer";
import DeleteModal from "./DeleteModal";

const PlacesItem = ({ title, description, imageUrl, address, location }) => {
  const [{ editModal, mapModal, deleteModal }, dispatch] = useReducer(
    modalsReducer,
    INITIAL_STATE
  );

  const handleModals = (id) => dispatch({ type: `SET_${id.toUpperCase()}` });

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
          <Tooltip
            title="View location on map"
            onClick={() => handleModals("map")}
          >
            <IconWrapper>
              <Map />
            </IconWrapper>
          </Tooltip>
          <Tooltip title="Edit place post" onClick={() => handleModals("edit")}>
            <IconWrapper>
              <Edit />
            </IconWrapper>
          </Tooltip>
          <Tooltip
            title="Delete place post"
            onClick={() => handleModals("delete")}
          >
            <IconWrapper>
              <Delete />
            </IconWrapper>
          </Tooltip>
        </PlacesActions>
      </PlacesCard>
      <MapModal
        open={mapModal}
        onClose={handleModals}
        address={address}
        center={location}
      />
      <EditModal
        open={editModal}
        onClose={handleModals}
        data={{ title, description, address }}
      />
      <DeleteModal open={deleteModal} onClose={handleModals} />
    </>
  );
};

export default PlacesItem;
