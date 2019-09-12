import { GET_BALANCE, ERROR } from "./types";

import axios from "axios";

export const getBalance = () => async dispatch => {
  try {
    const res = await axios.get("api/ingredient/balance");

    dispatch({
      type: GET_BALANCE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR
    });
    console.error(err);
  }
};
