import { GET_BALANCE } from "../actions/types";

const initialState = {
  taka: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BALANCE:
      return {
        ...state,
        taka: action.payload
      };
    default:
      return state;
  }
};
