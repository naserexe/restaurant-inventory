import React, { useState } from "react";
import Select from "react-select";
import { connect } from "react-redux";

import { getIngredients } from "../../actions/ingredientAction";
import { addRecipe } from "../../actions/dishAction";

const AddRecipe = ({
  ingredient: { ingredients },
  getIngredients,
  addRecipe
}) => {
  const [recipeName, setRecipeName] = useState("");
  const [quantity, setQuantity] = useState("");

  const onSubmit = () => {
    addRecipe();
    const newInfo = {
      recipeName,
      quantity
    };

    console.log(newInfo);
  };

  let options = ingredients.map(i => {
    return {
      label: i.name,
      value: i.name
    };
  });

  return (
    <div id='add-recipe-modal' className='modal' style={{ width: "50%" }}>
      <div className='modal-content'>
        <h4>Add Recipe</h4>
        <div className='row'>
          <div className='input-field'>
            <Select
              className='basic-single'
              onChange={opt => setRecipeName(opt.value)}
              options={options}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              name='quantity'
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <label htmlFor='quantity' className='active'>
              Quantity
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect purple waves-light btn'
        >
          Add
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  ingredient: state.ingredient
});

export default connect(
  mapStateToProps,
  { getIngredients, addRecipe }
)(AddRecipe);
