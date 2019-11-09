import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import AddIngredient from "./components/ingredient/AddIngredient";
import AddDish from "./components/dish/AddDish";
import Ingredient from "./components/ingredient/Ingredient";
import Dish from "./components/dish/Dish";
import AddRecipe from "./components/dish/AddRecipe";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <h1 className='center'>Dashboard</h1>

        <AddIngredient />
        <AddDish />
        <AddRecipe />
        <div className='row'>
          <div className='col s6'>
            <Ingredient />
          </div>

          <div className='col s6'>
            <Dish />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
