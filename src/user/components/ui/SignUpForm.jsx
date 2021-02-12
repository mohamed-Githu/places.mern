import { useReducer } from "react";
import { Typography } from "@material-ui/core";

import CustomButton from "../../../shared/components/CustomButton";
import Form from "../../../shared/components/form/ui/Form";
import InputField from "../../../shared/components/form/ui/InputField";
import signUpReducer, { INITIAL_STATE } from "../signUpReducer";
import { LinkedButton } from "../styles";

const SignUpForm = () => {
  const [state, dispatch] = useReducer(signUpReducer, INITIAL_STATE);
  const { email, password, name } = state;
  const isFormValid =
    name.isValid ||
    email.isValid ||
    password.isValid ||
    !email.value.length ||
    !password.value.length ||
    !name.value.length;

  const handleFormChange = (e) =>
    dispatch({
      type: `SET_${e.target.id.toUpperCase()}`,
      payload: e.target.value,
    });

  return (
    <Form title="Sign In">
      <InputField id="Name" field={name} action={handleFormChange} />
      <InputField id="Email" field={email} action={handleFormChange} />
      <InputField id="Password" field={password} action={handleFormChange} />
      <Typography paragraph variant="body1">
        Already have an account?{" "}
        <LinkedButton to="/auth/sign-in">Sign in</LinkedButton>
      </Typography>
      <CustomButton disabled={isFormValid}>Proceed</CustomButton>
    </Form>
  );
};

export default SignUpForm;
