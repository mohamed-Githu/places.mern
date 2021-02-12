import { validate, validateSize } from "../../shared/components/form/utils";

export const INITIAL_STATE = {
  name: {
    value: "",
    isValid: false,
    helperText: "This field is requierd",
  },
  email: {
    value: "",
    isValid: false,
    helperText: "Please enter a valid e-mail address",
  },
  password: {
    value: "",
    isValid: false,
    helperText: "The password must contain at least 6 characters",
  },
};

const signInReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case "SET_NAME":
      return {
          ...state,
          name: {
            ...state.name,
            value: payload,
            isValid: validate(payload),
          },
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: {
          ...state.email,
          value: payload,
          isValid: validate(payload),
        },
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: {
          ...state.password,
          value: payload,
          isValid: validateSize(payload, 6),
        },
      };
    default:
      return state;
  };
};

export default signInReducer;
  
