const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  recipe_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ingredients"
  },
  recipeName: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    require: true
  }
});

const DishSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  recipe: [RecipeSchema],

  sellingPrice: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("dishes", DishSchema);
