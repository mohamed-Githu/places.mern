export const INITIAL_STATE = {
  mapModal: false,
  editModal: false,
};

const modalsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "SET_MAP":
      return {
        ...state,
        mapModal: !state.mapModal,
      };
    case "SET_EDIT":
      return {
        ...state,
        editModal: !state.editModal,
      }
    default:
      return state;
  };
};

export default modalsReducer;
