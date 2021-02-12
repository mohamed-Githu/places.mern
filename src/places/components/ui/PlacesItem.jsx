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
import { modalIcons } from "../data";

const PlacesItem = ({ title, description, imageUrl, address, location }) => {
  const [{ editModal, mapModal, deleteModal }, dispatch] = useReducer(
    modalsReducer,
    INITIAL_STATE
  );

  const handleModals = (id) => dispatch({ type: `SET_${id}` });

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
          {modalIcons.map(({ title, id, Icon }) => (
            <Tooltip
              key={id}
              title={title}
              onClick={() => handleModals(id.toUpperCase())}
            >
              <IconWrapper>
                <Icon />
              </IconWrapper>
            </Tooltip>
          ))}
        </PlacesActions>
      </PlacesCard>
      <MapModal
        open={mapModal}
        onClose={() => handleModals("MAP")}
        address={address}
        center={location}
      />
      <EditModal
        open={editModal}
        onClose={() => handleModals("EDIT")}
        data={{ title, description, address }}
      />
      <DeleteModal open={deleteModal} onClose={() => handleModals("DELETE")} />
    </>
  );
};

export default PlacesItem;
