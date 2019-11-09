import React, { useState } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min";

import { getIngredients } from "../../actions/ingredientAction";
import { addRecipe } from "../../actions/dishAction";

const AddRecipe = ({
  ingredient: { ingredients },
  getIngredients,
  addRecipe,
  temp
}) => {
  const [quantity, setQuantity] = useState("");
  const [recipe_id, setRecipe_id] = useState("");
  const [name, setName] = useState("");

  const onSubmit = () => {
    if (quantity === "" || recipe_id === "") {
      M.toast({ html: "Please select recipe and quantity" });
    } else {
      const recipeInfo = {
        quantity
      };

      addRecipe(temp.temp_dish_id, recipe_id, recipeInfo);
      M.toast({ html: `${name} recipe successfully added` });

      // Clear fields
      setName("");
      setQuantity("");
      setRecipe_id("");
    }
  };

  let options = ingredients.map(i => {
    return {
      label: i.name,
      value: i.name,
      _id: i._id
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
              onChange={opt => {
                setRecipe_id(opt._id);
                setName(opt.value);
              }}
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
  ingredient: state.ingredient,
  temp: state.temporary
});

export default connect(
  mapStateToProps,
  { getIngredients, addRecipe }
)(AddRecipe);
