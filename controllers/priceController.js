const Price = require("../models/PriceModel");
const Transaction = require("../models/TransactionModel");
const { fetchAndStoreEthPrice } = require("../services/priceService");

const fetchAndStorePrice = async () => {
  try {
    const ethPrice = await fetchAndStoreEthPrice();
    const price = new Price({ price: ethPrice });
    await price.save();
    console.log(`Ethereum price saved: ${ethPrice}`);
  } catch (error) {
    console.error("Error fetching and storing Ethereum price:", error);
  }
};

const getTotalExpenses = async (req, res) => {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ error: "Ethereum address is required" });
  }

  try {

    const transactions = await Transaction.find({
      from: address, 
    });

    const latestPrice = await Price.findOne().sort({ timestamp: -1 });

    const totalExpense = transactions.reduce((acc, tx) => {
      const gasCost = (parseInt(tx.gasUsed) * parseInt(tx.gasPrice)) / 1e18;
      return acc + gasCost;
    }, 0);

    res.status(200).json({
      totalExpense,
      currentEthPrice: latestPrice ? latestPrice.price : null,
    });
  } catch (error) {
    res.status(500).json({ error: "Error calculating expenses" });
  }
};

module.exports = { fetchAndStorePrice, getTotalExpenses };
