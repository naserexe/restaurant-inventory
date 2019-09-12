import React from "react";

const DishItem = ({ dish }) => {
  const sell = () => {
    // @ TODO Selling dish
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

export default DishItem;
