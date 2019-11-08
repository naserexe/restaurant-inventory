import React from "react";
import { connect } from "react-redux";

import { buyIngredient } from "../../actions/ingredientAction";
import { deleteIngredient } from "../../actions/ingredientAction";
const IngredientItem = ({ ingredient, buyIngredient, deleteIngredient }) => {
  const buy = () => {
    // @ TODO: Buy ingredient

    buyIngredient(ingredient._id);
  };

  const deleteHandler = () => {
    deleteIngredient(ingredient._id);
  };
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.currentStock}</td>
      <td>{ingredient.cost}</td>
      <td>
        <button onClick={buy} className='waves-effect blue darken-1 btn-small'>
          BUY
        </button>
        <button
          onClick={deleteHandler}
          className='waves-effect red darken-1 btn-small'
        >
          DELETE
        </button>
      </td>
    </tr>
  );
};

export default connect(
  null,
  { buyIngredient, deleteIngredient }
)(IngredientItem);
