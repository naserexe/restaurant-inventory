import {
  GET_DISH,
  ERROR,
  ADD_DISH,
  ADD_RECIPE,
  SELL_DISH,
  GET_INGREDIENTS,
  REMOVE_TEMP,
  DELETE_DISH
} from "./types";

import axios from "axios";

export const getDishes = () => async dispatch => {
  try {
    const res = await axios.get("/api/dish");

    dispatch({
      type: GET_DISH,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ERROR,
      payload: err.response.data
    });
  }
};

// Add new Dish

export const addDish = newDish => async dispatch => {
  try {
    const res = await axios.post("/api/dish", newDish);

    dispatch({
      type: ADD_DISH,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: ERROR,
      payload: err.response
    });
  }
};

// Add recipe to Dish
export const addRecipe = (
  dish_id,
  ingredient_id,
  recipeInfo
) => async dispatch => {
  try {
    const res = await axios.post(
      `api/dish/recipe/${dish_id}/${ingredient_id}`,
      recipeInfo
    );

    dispatch({
      type: ADD_RECIPE,
      payload: res.data
    });
    dispatch({
      type: REMOVE_TEMP,
      payload: {}
    });
  } catch (err) {
    console.log(err);
  }
};

// Selling Dish
export const sellDish = dish_id => async dispatch => {
  try {
    const res = await axios.put(`api/dish/${dish_id}`);
    dispatch({
      type: SELL_DISH,
      payload: res.data
    });
    const ingredient = await axios.get("api/ingredient/");
    dispatch({
      type: GET_INGREDIENTS,
      payload: ingredient.data
    });
  } catch (error) {
    console.log(error);
  }
};

// Delete dish
export const deleteDish = _id => async dispatch => {
  try {
    await axios.delete(`api/dish/${_id}`);
    dispatch({
      type: DELETE_DISH,
      payload: _id
    });
  } catch (error) {
    console.log(error);
  }
};
