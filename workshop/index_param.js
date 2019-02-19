var express = require('express');
var app = express();
app.get('/greeting/:str1/:str2', (req, res) => {
 console.log(req)
 let greetText = req.params.str1 + " " + req.params.str2
 res.send(`<html><h1 style="align:center;">Hey: ${greetText}</h1></body></html>`)
})
app.listen(8000);
console.log('Server is ready!');