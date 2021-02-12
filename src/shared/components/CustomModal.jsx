import { Fade, Modal } from "@material-ui/core";
import { ModalBody } from "../layout";

const CustomModal = ({ children, open, onClose }) => (
  <Modal open={open} onClose={onClose} style={{ zIndex: 1303 }}>
    <Fade in={open}>
      <ModalBody>{children}</ModalBody>
    </Fade>
  </Modal>
);

export default CustomModal;
