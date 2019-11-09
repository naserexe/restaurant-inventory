import { STORE_TEMP, REMOVE_TEMP } from "../actions/types";

const initialState = {
  temp_dish_id: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_TEMP:
      return {
        ...state,
        temp_dish_id: action.payload
      };
    case STORE_TEMP:
      return {
        ...state,
        temp_dish_id: action.payload
      };

    default:
      return state;
  }
};
