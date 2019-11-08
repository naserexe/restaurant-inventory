import { GET_DISH, ERROR, ADD_DISH, ADD_RECIPE } from "./types";

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
export const addRecipe = (dish_id, ingredient_id) => async dispatch => {
  try {
    const res = await axios.post(`api/dish/recipe/${dish_id}/${ingredient_id}`);
    dispatch({
      type: ADD_RECIPE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response
    });
  }
};
