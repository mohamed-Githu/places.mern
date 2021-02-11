import { Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Map from "../../../shared/Map";

import { IconWrapper, ModalBody } from "../../../shared/layout";
import { ModalHeader, ModalTitle } from "../styles";

const MapModal = ({ address, center, open, onClose }) => (
  <Modal style={{ zIndex: 1303 }} open={open} onClose={() => onClose("map")}>
    <ModalBody>
      <ModalHeader>
        <ModalTitle variant="h1">{address}</ModalTitle>
        <IconWrapper onClick={onClose}>
          <Close color="secondary" />
        </IconWrapper>
      </ModalHeader>
      <Map center={center} />
    </ModalBody>
  </Modal>
);

export default MapModal;
