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
    ids: 'BTC, ADA, ETH',
    interval: '1d,30d',
    convert: 'EUR'
  };
  const query = Object.keys(params).map(key => key + '=' + params[key]).join('&');

  axios.get(`${endpoint}?${query}`)
    .then(result => {
      response.send(result.data);
    })
    .catch(error => {
      console.log("Error fetching data from nomics", error);
    });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});