var express = require('express') 
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

app.use(cookieParser('keyboard cat')) 
  
app.get('/ck_get', function(req, res) { 
   res.send(req.cookies) 
}) 
  
app.get('/ck_set', function(req, res) { 
   res.cookie('a', 20) 
   res.send('ok') 
})

app.listen(8000);
console.log('Server is ready!');