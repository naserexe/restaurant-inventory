import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { getBalance } from "../../actions/balanceAction";

const Navbar = ({ bal: { taka }, getBalance }) => {
  useEffect(() => {
    M.AutoInit();
    getBalance();
    // eslint-disable-next-line
  }, []);

  // const balance = taka.map(t => {
  //   return <li key={t._id}>Balance: {t.balanceAmount}</li>;
  // });

  return (
    <nav className='purple'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo center'>
          MERN Restaurant Management
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>Balance: ${taka.balanceAmount}</li>

          <li>
            <a href='#add-dish-modal' className='modal-trigger'>
              Add Dish
            </a>
          </li>
          <li>
            <a href='#add-ingredient-modal' className='modal-trigger'>
              Add Ingredient
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => ({
  bal: state.balance
});
export default connect(
  mapStateToProps,
  { getBalance }
)(Navbar);
