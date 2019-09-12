import { GET_DISH, ERROR } from "./types";

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
