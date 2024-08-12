const initialState = {
  displayMenu: "",
  searchText: "",
};

function menuReducer(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "SET_MENU_INFO":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}

export default menuReducer;
