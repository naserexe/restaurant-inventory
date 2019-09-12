import { GET_DISH } from "../actions/types";

const initialState = {
  dishes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DISH:
      return {
        ...state,
        dishes: action.payload
      };
    default:
      return state;
  }
};
