import React, { useEffect } from "react";
import IngredientItem from "./IngredientItem";
import { connect } from "react-redux";
import { getIngredients } from "../../actions/ingredientAction";
import SelectOption from "../layout/SelectOptions";

const Ingredient = ({ ingr: { ingredients }, getIngredients }) => {
  useEffect(() => {
    getIngredients();
    // eslint-disable-next-line
  }, []);
  const item = ingredients.map(ingredient => (
    <IngredientItem ingredient={ingredient} key={ingredient._id} />
  ));
  return (
    <div>
      <h4>Ingredients</h4>
      <table className='striped'>
        <thead>
          <tr>
            <th>Ingredients</th>
            <th>Current Stock</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  ingr: state.ingredient
});

export default connect(
  mapStateToProps,
  { getIngredients }
)(Ingredient);
