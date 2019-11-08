import {
  GET_INGREDIENTS,
  BUY_INGREDIENT,
  ADD_INGREDIENT,
  DELETE_INGREDIENT
} from "../actions/types";

const initialState = {
  ingredients: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          ingredient => ingredient._id !== action.payload
        )
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: action.payload
      };
    case BUY_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.map(ingredient =>
          ingredient._id === action.payload._id ? action.payload : ingredient
        )
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload
      };
    default:
      return state;
  }
};
