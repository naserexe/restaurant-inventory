const mongoose = require("mongoose");

const IngredientSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  cost: {
    type: Number,
    require: true
  },
  currentStock: {
    type: Number,
    default: 1
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ingredient", IngredientSchema);
