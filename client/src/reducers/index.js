import { combineReducers } from "redux";
import dish from "./dishReducer";
import ingredient from "./ingredientReducer";
import balance from "./balanceReducer";
import temp from "./temporaryReducer";

export default combineReducers({
  dish: dish,
  ingredient: ingredient,
  balance: balance,
  temporary: temp
});
