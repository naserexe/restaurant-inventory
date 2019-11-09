import { STORE_TEMP } from "./types";
export const storeTemp = dish_id => async dispatch => {
  try {
    dispatch({
      type: STORE_TEMP,
      payload: dish_id
    });
  } catch (error) {
    console.log(error);
  }
};
