const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Ingredient = require("../models/Ingredient");
const Balance = require("../models/Balance");

// @route GET api/balance
// @dsc Get balance
// @access Private
router.get("/balance", async (req, res) => {
  try {
    // VERY IMPORTANT NOTE ---If i want single object then it should be used findOne() method
    const bal = await Balance.findOne();
    res.json(bal);
  } catch (err) {
    console.error(err);
    res.send("Server Error");
  }
});

// @route POST api/ingredient
// @dsc   Add ingredient
// @access Private
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),

    check("cost", "cost is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, cost, currentStock } = req.body;
    try {
      const newIngredient = new Ingredient({
        name,
        cost,
        currentStock
      });

      const ingredient = await newIngredient.save();
      res.json(ingredient);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }
);

// @route GET api/ingredient
// @dsc   GET All Ingredient
// @access Private
router.get("/", async (req, res) => {
  try {
    const ingredient = await Ingredient.find().sort({ date: -1 });
    res.json(ingredient);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route   Put api/ingredient/:id
// @dsc     Buy Ingredient that update currentStock
// @access  Private
router.put("/:id", async (req, res) => {
  try {
    // Check to see the ingredient is exist
    let ingredient = await Ingredient.findById(req.params.id);
    const { cost } = ingredient;

    // Update balance according to ingredient costs
    let currentBalance = await Balance.findOne();

    const { _id, balanceAmount } = currentBalance;
    let newBalance = balanceAmount - cost;
    let updBalance = await Balance.findByIdAndUpdate(
      _id,
      {
        $set: { balanceAmount: newBalance }
      },
      // Get latest updated data
      { new: true }
    );

    // Increase currentStock by 1
    ingredient = await Ingredient.findByIdAndUpdate(
      req.params.id,
      {
        $set: { currentStock: (ingredient.currentStock += 1) }
      }, // Get latest updated data
      { new: true }
    );
    res.json({ ingredient, updBalance });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
