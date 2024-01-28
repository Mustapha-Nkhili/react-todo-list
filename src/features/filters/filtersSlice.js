const initialState = {
  status: "all",
  color: "red",
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/changeTodosFilterStatus": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
}
