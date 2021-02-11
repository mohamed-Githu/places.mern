import { useReducer } from "react";
import { TextField } from "@material-ui/core";

import { FormContainer, FormSubmit, FormTitle } from "../styles";
import { Flex } from "../../../layout";
import inputReducer, { INITIAL_STATE } from "../inputReducer";

const PlaceForm = ({ initialState }) => {
  const [state, dispatch] = useReducer(
    inputReducer,
    initialState || INITIAL_STATE
  );
  const { title, description, address } = state;

  const handleFormChange = (e) =>
    dispatch({
      type: `SET_${e.target.id.toUpperCase()}`,
      payload: e.target.value,
    });

  return (
    <FormContainer elevation={4}>
      <Flex align="center" direction="column">
        <FormTitle>New Place</FormTitle>
        <TextField
          id="Title"
          label="Title"
          variant="outlined"
          color="secondary"
          error={title.isValid}
          value={title.value}
          onChange={handleFormChange}
          onBlur={handleFormChange}
          helperText={title.isValid && "This Field Is Requierd"}
          fullWidth
        />
        <TextField
          id="Description"
          label="Description"
          variant="outlined"
          color="secondary"
          error={description.isValid}
          value={description.value}
          onChange={handleFormChange}
          onBlur={handleFormChange}
          helperText={
            description.isValid &&
            "The Description Must Contain At Least 10 Characters"
          }
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          id="Address"
          label="Address"
          variant="outlined"
          color="secondary"
          error={address.isValid}
          value={address.value}
          onChange={handleFormChange}
          onBlur={handleFormChange}
          helperText={address.isValid && "Please Enter a Valid Address"}
          fullWidth
        />
        <FormSubmit
          elevation={5}
          disabled={
            !title.value.lenght || description.isValid || !address.value.lenght
          }
        >
          Add Place
        </FormSubmit>
      </Flex>
    </FormContainer>
  );
};

export default PlaceForm;
