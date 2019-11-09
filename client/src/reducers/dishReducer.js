import { GET_DISH, ADD_DISH, ADD_RECIPE, DELETE_DISH } from "../actions/types";

const initialState = {
  dishes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter(dish => dish._id !== action.payload)
      };
    case ADD_RECIPE:
      return {
        ...state,
        dishes: action.payload
      };
    case ADD_DISH:
      return {
        ...state,
        dishes: action.payload
      };
    case GET_DISH:
      return {
        ...state,
        dishes: action.payload
      };
    default:
      return state;
  }
};
