import { Close } from "@material-ui/icons";

import CustomModal from "../../../shared/components/CustomModal";
import Map from "../../../shared/components/Map";
import { IconWrapper } from "../../../shared/layout";
import { ModalHeader, ModalTitle } from "../styles";

const MapModal = ({ address, center, open, onClose }) => (
  <CustomModal open={open} onClose={() => onClose("map")}>
    <ModalHeader>
      <ModalTitle variant="h1">{address}</ModalTitle>
      <IconWrapper onClick={onClose}>
        <Close color="secondary" />
      </IconWrapper>
    </ModalHeader>
    <Map center={center} />
  </CustomModal>
);

export default MapModal;
