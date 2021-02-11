import { Modal } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Map from "../../../shared/Map";

import { IconWrapper, ModalBody } from "../../../shared/layout";
import { ModalHeader, ModalTitle } from "../styles";

const MapModal = ({ address, center, ...modalProps }) => (
  <Modal {...modalProps} style={{ zIndex: 1303 }}>
    <ModalBody>
      <ModalHeader>
        <ModalTitle variant="h1">{address}</ModalTitle>
        <IconWrapper onClick={modalProps.onClose}>
          <Close color="secondary" />
        </IconWrapper>
      </ModalHeader>
      <Map center={center} />
    </ModalBody>
  </Modal>
);

export default MapModal;
