import { GET_INGREDIENTS, ERROR, BUY_INGREDIENT, GET_BALANCE } from "./types";

import axios from "axios";

export const getIngredients = () => async dispatch => {
  try {
    const res = await axios.get("api/ingredient/");

    console.log();

    dispatch({
      type: GET_INGREDIENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response.data
    });
    console.error(err);
  }
};

export const buyIngredient = _id => async dispatch => {
  try {
    const res = await axios.put(`/api/ingredient/${_id}`);

    dispatch({
      type: BUY_INGREDIENT,
      payload: res.data.ingredient
    });

    dispatch({
      type: GET_BALANCE,
      payload: res.data.updBalance
    });
  } catch (err) {
    console.error(err);
  }
};
