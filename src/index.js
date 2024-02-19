require('dotenv').config()
const express = require('express')
const app = express()
const IP = require('ip');
const axios = require('axios');

const port = process.env.PORT || 3000
const path = require('path')

const URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_API_KEY}`;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'views'));

const sendAPIRequest = async (ipAddress) => {
  const apiResponse = await axios.get(URL + "&ip=" + ipAddress);
  return apiResponse.data;
}

app.get('/', async (req, res) => {
  const ipAddress = IP.address();
  const ipAddressInformation = await sendAPIRequest(ipAddress);

  res.render('home', {ip: ipAddressInformation.ip});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
