import {
  GET_INGREDIENTS,
  ERROR,
  BUY_INGREDIENT,
  GET_BALANCE,
  ADD_INGREDIENT,
  DELETE_INGREDIENT
} from "./types";

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

// Add Ingredient
export const addIngredient = ingredient => async dispatch => {
  try {
    const res = await axios.post("api/ingredient", ingredient);
    dispatch({
      type: ADD_INGREDIENT,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete ingredient
export const deleteIngredient = _id => async dispatch => {
  try {
    await axios.delete(`api/ingredient/${_id}`);
    dispatch({
      type: DELETE_INGREDIENT,
      payload: _id
    });
  } catch (error) {
    console.log(error);
  }
};
