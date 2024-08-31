const axios = require('axios');

const getTransactions = async (address) => {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&sort=asc&apikey=${apiKey}`;

  try {
    const response = await axios.get(url);
    if (response.data.status === '1') {
      return response.data.result;
    } else {
      throw new Error(`Failed to fetch transactions: ${response.data.message}`);
    }
  } catch (error) {
    throw new Error(`Error fetching transactions: ${error.message}`);
  }
};

module.exports = { getTransactions };
