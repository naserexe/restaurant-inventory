import React, { useState } from "react";

import "materialize-css/dist/css/materialize.min.css";

const AddDish = () => {
  const [name, setName] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const onSubmit = () => {
    const newInfo = {
      name,
      sellingPrice
    };

    console.log(newInfo);
  };
  return (
    <div id='add-dish-modal' className='modal' style={{ width: "20%" }}>
      <div className='modal-content'>
        <h4>Add Dish</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Dish Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              name='sellingPrice'
              value={sellingPrice}
              onChange={e => setSellingPrice(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Selling Price
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

export default AddDish;
