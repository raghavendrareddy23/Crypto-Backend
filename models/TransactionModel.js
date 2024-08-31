const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    blockNumber: String,
    blockHash: String,
    timeStamp: String,
    hash: String,
    nonce: String,
    transactionIndex: String,
    from: String,
    to: String,
    value: String,
    gas: String,
    gasPrice: String,
    gasUsed: String,
    isError: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Transaction", transactionSchema);
