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
      await newDish.save();
      const dish = await Dish.find();
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
        recipe_id: ingredient._id
      };

      // Add newDish object to recipe array
      dish.recipe.unshift(newDish);

      // Save change
      await dish.save();
      const updDish = await Dish.find();
      res.status(201).json(updDish);
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
    // Check to see if the dish exists

    const dish = await Dish.findById(req.params.id);

    if (dish) {
      // // //Update balance according to dish price
      let currentBalance = await Balance.findOne();
      const { _id, balanceAmount } = currentBalance;
      const sellingPrice = dish.sellingPrice;
      let newBalance = balanceAmount + sellingPrice;
      const updBalance = await Balance.findByIdAndUpdate(
        _id,
        {
          $set: { balanceAmount: newBalance }
        },
        // Get latest updated data
        { new: true }
      );

      // Adjust stock amount
      let recipes = dish.recipe;
      recipes.map(async recipe => {
        let ingredient = await Ingredient.findById(recipe.recipe_id);
        ingredient = await Ingredient.findByIdAndUpdate(
          recipe.recipe_id,
          {
            $set: { currentStock: ingredient.currentStock - recipe.quantity }
          },
          { new: true }
        );
      });
      const ingredient = await Ingredient.find();
      res.status(200).json({ ingredient, updBalance });
    } else {
      return res.status(404).send("Dish does not exist");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// Get all dish
router.get("/get_all", async (req, res) => {
  let dish = await Dish.find();
});

// Delete dish
router.delete("/:id", async (req, res) => {
  try {
    await Dish.findByIdAndDelete(req.params.id);
    res.status(200).json("Successfully deleted");
  } catch (error) {
    res.status(500).json("Server Error");
    console.log(error);
  }
});

module.exports = router;
