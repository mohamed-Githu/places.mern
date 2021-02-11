import { validate, validateSize } from "./utils";

export const INITIAL_STATE = {
  title: {
    value: "",
    isValid: false,
  },
  description: {
    value: "",
    isValid: false,
  },
  address: {
    value: "",
    isValid: false,
  },
};

const inputReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch(type) {
    case "SET_TITLE":
      return {
        ...state,
        title: {
          value: payload,
          isValid: validate(payload),
        },
      };
    case "SET_DESCRIPTION":
      return {
        ...state,
        description: {
          value: payload,
          isValid: validateSize(payload, 10),
        },
      };
    case "SET_ADDRESS":
      return {
        ...state,
        address: {
          value: payload,
          isValid: validate(payload),
        },
      };
    default:
      return state;
  };
};

export default inputReducer;
