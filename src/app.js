const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(cors());

app.get('/api/v1/get-ip', function (req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  res.json({
    ip
  })
})

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

app.listen(PORT, function () {
  console.log(`App listen on http://localhost:${PORT}`)
})