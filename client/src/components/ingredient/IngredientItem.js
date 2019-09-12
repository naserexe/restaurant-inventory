import React from "react";
import { connect } from "react-redux";
import { buyIngredient } from "../../actions/ingredientAction";

const IngredientItem = ({ ingredient, buyIngredient }) => {
  const buy = () => {
    // @ TODO: Buy ingredient

    buyIngredient(ingredient._id);
  };
  return (
    <tr>
      <td>{ingredient.name}</td>
      <td>{ingredient.currentStock}</td>
      <td>{ingredient.cost}</td>
      <td>
        <button onClick={buy} className='waves-effect red darken-1 btn-small'>
          BUY
        </button>
      </td>
    </tr>
  );
};

export default connect(
  null,
  { buyIngredient }
)(IngredientItem);
