import React from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min";

import { sellDish, deleteDish } from "../../actions/dishAction";
import { storeTemp } from "../../actions/temporaryActions";

const DishItem = ({ dish, sellDish, storeTemp, deleteDish }) => {
  const handleSell = () => {
    sellDish(dish._id);
  };

  const addRecipe = () => {
    storeTemp(dish._id);
  };

  const handleDelete = () => {
    deleteDish(dish._id);
    M.toast({ html: "Dish deleted successfully" });
  };

  return (
    <tr>
      <td>{dish.name}</td>
      <td>
        {dish.recipe.map(r => {
          return (
            <p key={r._id}>
              {r.recipeName}({r.quantity}),
            </p>
          );
        })}
      </td>
      <td>
        {" "}
        <a
          onClick={addRecipe}
          href='#add-recipe-modal'
          className='modal-trigger'
        >
          Add Recipe
        </a>
      </td>
      <td>${dish.sellingPrice}</td>
      <td>
        {" "}
        <button
          onClick={handleSell}
          className='waves-effect green darken-1 btn-small'
        >
          SELL
        </button>
        <button
          onClick={handleDelete}
          className='waves-effect red darken-1 btn-small'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  ingredient: state.ingredient,
  balance: state.balance
});

export default connect(
  mapStateToProps,
  { sellDish, storeTemp, deleteDish }
)(DishItem);
