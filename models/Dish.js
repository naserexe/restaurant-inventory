const mongoose = require("mongoose");

const DishSchema = mongoose.Schema({
  dish: [
    {
      name: {
        type: String,
        require: true
      },
      recipe: {
        type: String,
        require: true
      },
      quantity: {
        type: Number,
        require: true
      },
      sellingPrice: {
        type: Number,
        require: true
      }
    }
  ]
});

module.exports = mongoose.model("dishes", DishSchema);
