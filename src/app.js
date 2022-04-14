const express = require('express');
const cors = require('cors');
const path = require('path');
const {getRequestIpAddress} = require('./clientip');
const PORT = 3000;

const app = express();

app.use(cors());

app.get('/api/v1/get-ip', function (req, res) {
  const clientIp = getRequestIpAddress(req);
  res.json({
    ip: clientIp
  })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.listen(PORT, function () {
  console.log(`App listen on http://localhost:${PORT}`)
})