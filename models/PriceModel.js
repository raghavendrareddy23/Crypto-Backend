const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    price: Number,
    timestamp: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Price", priceSchema);
