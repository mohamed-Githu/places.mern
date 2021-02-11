import { Modal } from "@material-ui/core";

import { ModalBody } from "../../../shared/layout";
import PlaceForm from "../../../shared/components/place-form/ui/PlaceForm";

const EditModal = ({ data, open, onClose }) => (
  <Modal open={open} onClose={() => onClose("edit")} style={{ zIndex: 1303 }}>
    <ModalBody>
      <PlaceForm
        initialState={{
          title: {
            value: data.title,
            isValid: false,
          },
          description: {
            value: data.description,
            isValid: false,
          },
          address: {
            value: data.address,
            isValid: false,
          },
        }}
      />
    </ModalBody>
  </Modal>
);

export default EditModal;
