import { GET_BALANCE, SELL_DISH } from "../actions/types";

const initialState = {
  taka: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELL_DISH:
      return {
        ...state,
        taka: action.payload.updBalance
      };
    case GET_BALANCE:
      return {
        ...state,
        taka: action.payload
      };
    default:
      return state;
  }
};
