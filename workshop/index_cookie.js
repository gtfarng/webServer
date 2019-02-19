var express = require('express')
var app = express()
var cookieParser = require('cookie-parser')
app.use(cookieParser('keyboard cat')) //‘keyboard cat’ is a secret key to sign cookie (prevent cookie tamper)
app.get('/ck_get', function (req, res) {
    res.send(req.cookies)
})
app.get('/ck_set', function (req, res) {
    res.cookie('a', 10)
    res.send('ok')
})
app.listen(8000)
console.log('Server is ready!');