import { GET_DISH, ADD_DISH, ADD_RECIPE } from "../actions/types";

const initialState = {
  dishes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        dishes: [...state.dishes]
      };
    case ADD_DISH:
      return {
        ...state,
        dishes: state.dishes.map(dish =>
          dish._id === action.payload._id ? action.payload : dish
        )
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
