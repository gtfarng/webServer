var express = require('express')
var app = express()
var bodyParser = require('body-parser')
  
var urlencodedParser = bodyParser.urlencoded({ extended: false }); 

 		app.use(express.static(__dirname + '/public')); 
  
 		app.post('/add', urlencodedParser, function(req, res){ 
    	var result = parseInt(req.body.a) + parseInt(req.body.b); 
    	res.send('Result = ' + result); 
 		});
  
app.listen(8000);
console.log('Server is ready!');
