import { validate, validateSize } from "../../shared/components/form/utils";

export const INITIAL_STATE = {
  title: {
    value: "",
    isValid: false,
    helperText: "This Field Is Requierd"
  },
  description: {
    value: "",
    isValid: false,
    helperText: "The Description Must Contain At Least 10 Characters"
  },
  address: {
    value: "",
    isValid: false,
    helperText: "Please Enter a Valid Address"
  },
};

const inputReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case "SET_TITLE":
      return {
        ...state,
        title: {
          ...state.title,
          value: payload,
          isValid: validate(payload),
        },
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: {
          ...state.description,
          value: payload,
          isValid: validateSize(payload, 10),
        },
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: {
          ...state.address,
          value: payload,
          isValid: validate(payload),
        },
      };
    default:
      return state;
  };
};

export default inputReducer;
