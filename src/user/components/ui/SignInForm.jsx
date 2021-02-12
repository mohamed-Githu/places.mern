import { useReducer } from "react";
import { Typography } from "@material-ui/core";

import CustomButton from "../../../shared/components/CustomButton";
import Form from "../../../shared/components/form/ui/Form";
import InputField from "../../../shared/components/form/ui/InputField";
import signInReducer, { INITIAL_STATE } from "../signInReducer";
import { LinkedButton } from "../styles";

const SignInForm = () => {
  const [state, dispatch] = useReducer(signInReducer, INITIAL_STATE);
  const { email, password } = state;
  const isFormValid =
    email.isValid ||
    password.isValid ||
    !email.value.length ||
    !password.value.length;

  const handleFormChange = (e) =>
    dispatch({
      type: `SET_${e.target.id.toUpperCase()}`,
      payload: e.target.value,
    });

  return (
    <Form title="Sign In">
      <InputField id="Email" field={email} action={handleFormChange} />
      <InputField id="Password" field={password} action={handleFormChange} />
      <Typography paragraph variant="body1">
        Don't have an account?{" "}
        <LinkedButton to="/auth/sign-up">Sign up</LinkedButton>
      </Typography>
      <CustomButton disabled={isFormValid}>Proceed</CustomButton>
    </Form>
  );
};

export default SignInForm;
