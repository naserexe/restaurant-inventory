import React from "react";
import { connect } from "react-redux";
import { sellDish } from "../../actions/dishAction";

const DishItem = ({ dish, sellDish }) => {
  const sell = () => {
    sellDish(dish._id);
  };

  const addRecipe = () => {
    console.log(dish._id);
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
      <td>{dish.sellingPrice}</td>
      <td>
        {" "}
        <button
          onClick={sell}
          className='waves-effect green darken-1 btn-small'
        >
          SELL
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
  { sellDish }
)(DishItem);
