const axios = require('axios');

let apiKey = process.env.REACT_APP_ALPHA_API_KEY;
let url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey=${apiKey}`;

const getExchangeRates = (cb) => {
  axios.get(url)
  .then((res) => {
    cb(res.data);
  })
  .catch((err) => {
    console.error("ERROR:", err);
  })
}

module.exports.getExchangeRates = getExchangeRates;