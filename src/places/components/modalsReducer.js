export const INITIAL_STATE = {
  mapModal: false,
  editModal: false,
  deleteModal: false,
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
      };
    case "SET_DELETE":
      return {
        ...state,
        deleteModal: !state.deleteModal,
      }
    default:
      return state;
  };
};

export default modalsReducer;
