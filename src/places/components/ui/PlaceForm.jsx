import { useReducer } from "react";

import CustomButton from "../../../shared/components/CustomButton";
import Form from "../../../shared/components/form/ui/Form";
import InputField from "../../../shared/components/form/ui/InputField";

import inputReducer, { INITIAL_STATE } from "../inputReducer";

const PlaceForm = ({ initialState }) => {
  const [state, dispatch] = useReducer(
    inputReducer,
    initialState || INITIAL_STATE
  );
  const { title, description, address } = state;
  const isFormValid =
    title.isValid ||
    description.isValid ||
    address.isValid ||
    !title.value.length ||
    !description.value.length ||
    !address.value.length;

  const handleFormChange = (e) =>
    dispatch({
      type: `SET_${e.target.id.toUpperCase()}`,
      payload: e.target.value,
    });

  return (
    <Form title="New Place">
      <InputField id="Title" field={title} action={handleFormChange} />
      <InputField
        id="Description"
        action={handleFormChange}
        field={description}
        rows={3}
      />
      <InputField id="Address" field={address} action={handleFormChange} />
      <CustomButton disabled={isFormValid}>Add Place</CustomButton>
    </Form>
  );
};

export default PlaceForm;
