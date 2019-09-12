import React, { useState } from "react";

import "materialize-css/dist/css/materialize.min.css";

const AddIngredient = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = () => {
    const newInfo = {
      name,
      cost
    };

    console.log(newInfo);
  };
  return (
    <div id='add-ingredient-modal' className='modal' style={{ width: "20%" }}>
      <div className='modal-content'>
        <h4>Add Ingredient</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Ingredient Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              name='cost'
              value={cost}
              onChange={e => setCost(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Ingredient Cost
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
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddIngredient;
