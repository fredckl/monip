const express = require('express');
const cors = require('cors');
const requestIp = require('request-ip')
const path = require('path');
const PORT = 3000;

const app = express();

app.use(cors());

app.get('/api/v1/get-ip', function (req, res) {
  clientIp = requestIp.getClientIp(request);remoteAddress;
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