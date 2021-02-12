import PlaceForm from "../../../shared/components/place-form/ui/PlaceForm";
import CustomModal from "../../../shared/components/CustomModal";

const EditModal = ({ data, open, onClose }) => (
  <CustomModal open={open} onClose={() => onClose("edit")}>
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
