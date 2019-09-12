const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Dish = require("../models/Dish");
const Balance = require("../models/Balance");
const Ingredient = require("../models/Ingredient");

router.get("/", async (req, res) => {
  try {
    const dish = await Dish.find();

    res.json(dish);
  } catch (err) {
    console.error(err);
    res.send("SERVER ERROR");
  }
});

// @route POST api/dish
// @dsc   Add Dish
// @access Private
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),

    check("sellingPrice", "Selling price is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, sellingPrice } = req.body;
    try {
      const newDish = new Dish({
        name,

        sellingPrice
      });
      const dish = await newDish.save();
      res.json(dish);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST api/dish/recipe
// @dsc   Add recipe for dishes
// @access Private
router.post(
  "/recipe/:dsh_id/:ingredient_id",
  [
    check("quantity", "Quantity is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let dish = await Dish.findById(req.params.dsh_id);
      let ingredient = await Ingredient.findById(req.params.ingredient_id);
      const { quantity } = req.body;

      // Create new dishes object
      const newDish = {
        recipeName: ingredient.name,
        quantity,
        recipe_Id: ingredient._id
      };

      // Add newDish object to recipe array
      dish.recipe.unshift(newDish);

      // Save change
      const updDish = await dish.save();
      res.json(updDish);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

// @route POST api/dish/
// @dsc   Sell dish
// @access Private
router.put("/:id", async (req, res) => {
  try {
    // Check to see Dish is exist
    let dish = await Dish.findById(req.params.id);
    const { sellingPrice, recipe } = dish;
    const { recipeName, quantity } = recipe;

    // Find ingredient model for updating ingredients
    let ingredient = await Ingredient.findById(recipe);

    recipe.map(r => {
      res.json(r._id);
    });

    // Update Ingredients according to dish requirement

    // let ingredientShouldUpdate = recipe.filter(i => {
    //   //Pull out which ingredient need to update
    //   return i._id == req.params.ingredient_id;
    // });

    // const ingr = ingredientShouldUpdate[0].quantity;

    // let ingredient = await Ingredient.findById("5d64edb3063bd73bd8009d64");

    // ingredient = await Ingredient.findByIdAndUpdate(
    //   ingredient._id,
    //   {
    //     $set: { currentStock: ingredient.currentStock - ingr }
    //   }, // Get latest updated data
    //   { new: true }
    // );

    // //Update balance according to dish price
    // let currentBalance = await Balance.findOne();
    // const { _id, balanceAmount } = currentBalance;

    // let newBalance = balanceAmount + sellingPrice;
    // const updBalance = await Balance.findByIdAndUpdate(
    //   _id,
    //   {
    //     $set: { balanceAmount: newBalance }
    //   },
    //  // Get latest updated data
    //   { new: true }
    // );
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/get_all", async (req, res) => {
  let dish = await Dish.find();
});

module.exports = router;
