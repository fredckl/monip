require('dotenv').config()
const express = require('express')
const app = express()
const IP = require('ip');
const port = process.env.PORT || 3000
const path = require('path')
const hbs = require('express-hbs')


app.engine('hbs', hbs.express4({
  partialsDir: path.join(__dirname, '..', 'views','partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'views'));

app.get('/', (req, res) => {
    const ipAddress = IP.address();
    res.render('home', {ip: ipAddress});
    // res.send(ipAddress)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
