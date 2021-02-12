
import CustomModal from "../../../shared/components/CustomModal";
import PlaceForm from "./PlaceForm";

const EditModal = ({ data, open, onClose }) => (
  <CustomModal open={open} onClose={onClose}>
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
  </CustomModal>
);

export default EditModal;
