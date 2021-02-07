require('dotenv').config()
var express = require("express");
var app = express();
var axios = require("axios");

app.use(express.static("dist"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/app/index.html");
});

app.get("/prices", (request, response) => {
  const endpoint = `https://api.nomics.com/v1/currencies/ticker`;  
  const params = {
    key: process.env.NOMICS_API_KEY,
    ids: 'BTC,ETH,ADA,DOT,LTC,LINK,DOGE,XLM,UNI,AAVE,EOS,XTZ,MKR,SNX,COMP,IOTA,FIL,GRT,CELO,BAT,KNC,AMPL,BAND,NU',
    interval: '1d,30d',
    convert: 'EUR'
  };
  const query = Object.keys(params).map(key => key + '=' + params[key]).join('&');
  const url = `${endpoint}?${query}`;

  axios.get(url)
    .then(result => {
      const transport = result.data.map(e => {
        const price_change_pct_1d = e['1d'] !== undefined ? e['1d'].price_change_pct : undefined;
        const price_change_pct_30d = e['30d'] !== undefined ? e['30d'].price_change_pct : undefined;

        return {
          currency: e.currency,
          name: e.name,
          price: e.price,
          market_cap: e.market_cap,
          '1d': {
            price_change_pct: price_change_pct_1d
          },
          '30d': {
            price_change_pct: price_change_pct_30d,
          }
        };
      });
      
      response.send(transport);
    })
    .catch(error => {
      console.log("Error fetching data from nomics", error);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});