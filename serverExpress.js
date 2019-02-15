var express = require('express')
var app = express();
const str = 'Hello World';

app.get('/', function(req,res){
	res.send(str);
});

app.get('/foo', function(req,res){
	res.send(str+ 'foo');
});
 
app.listen(8000);
console.log('Server is ready!');