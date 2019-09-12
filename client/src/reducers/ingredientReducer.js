import { GET_INGREDIENTS, BUY_INGREDIENT } from "../actions/types";

const initialState = {
  ingredients: []
};

export default (state = initialState, action) => {
  switch (action.type) {
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
