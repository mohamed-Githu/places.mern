import { Fade, Modal } from "@material-ui/core";
import { ModalBody } from "../layout";

const CustomModal = ({ children, open, onClose, normalHeight }) => (
  <Modal open={open} onClose={onClose} style={{ zIndex: 1303 }}>
    <Fade in={open}>
      <ModalBody normalHeight={normalHeight}>{children}</ModalBody>
    </Fade>
  </Modal>
);

export default CustomModal;
