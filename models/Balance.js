const mongoose = require("mongoose");

const BalanceSchema = mongoose.Schema({
  balanceAmount: {
    type: Number,
    default: 500,
    require: true
  }
});

module.exports = mongoose.model("balance", BalanceSchema);
