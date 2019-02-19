var express = require('express');
var app = express();
app.get('greeting', (req, res) => {
    let greetText = req.query.str1 + " " + req.query.str2
    res.send(`<html><h1 style="align:center;">${greetText}</h1></body></html>`)
})
app.listen(8000);
console.log('Server is ready!');
