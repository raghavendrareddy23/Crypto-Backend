const axios = require('axios');

const fetchAndStoreEthPrice = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr'
    );
    const ethPriceInInr = response.data.ethereum.inr;

    return ethPriceInInr; 
  } catch (error) {
    console.error('Error fetching Ethereum price:', error);
    throw new Error('Error fetching Ethereum price');
  }
};

module.exports = { fetchAndStoreEthPrice };
