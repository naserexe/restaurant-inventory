import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDishes } from "../../actions/dishAction";
import DishItem from "./DishItem";

const Dish = ({ dish: { dishes }, getDishes }) => {
  useEffect(() => {
    getDishes();
    // eslint-disable-next-line
  }, []);

  const item = dishes.map(singleDish => (
    <DishItem dish={singleDish} key={singleDish._id} />
  ));

  return (
    <div>
      <h4>Dish</h4>
      <table className='striped'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Recipe</th>
            <th>Add Recipe</th>
            <th>Selling Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{item}</tbody>
      </table>
    </div>
  );
};
const mapStateToProps = state => ({
  dish: state.dish
});
export default connect(
  mapStateToProps,
  { getDishes }
)(Dish);
