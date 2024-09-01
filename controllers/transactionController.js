const Transaction = require('../models/TransactionModel');
const { getTransactions } = require('../services/etherscanService');

const fetchAndStoreTransactions = async (req, res, next) => {
  const address = req.params.address; 

  if (!address) {
    return res.status(400).json({ error: "Ethereum address is required" });
  }

  try {
    const transactions = await getTransactions(address);

    await Transaction.deleteMany({ address });

    const transactionDocs = transactions.map(tx => ({
      blockNumber: tx.blockNumber,
      blockHash: tx.blockHash,
      timeStamp: tx.timeStamp,
      hash: tx.hash,
      nonce: tx.nonce,
      transactionIndex: tx.transactionIndex,
      from: tx.from,
      to: tx.to,
      value: tx.value,
      gas: tx.gas,
      gasPrice: tx.gasPrice,
      gasUsed: tx.gasUsed,
      isError: tx.isError,
      address: address, 
    }));

    await Transaction.insertMany(transactionDocs);

    res.status(200).json({ success: true, data: transactionDocs });
  } catch (error) {
    next(error);
  }
};

module.exports = { fetchAndStoreTransactions };
