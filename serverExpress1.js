var express = require('express'); 
var app = express();
 
app.use(express.static('public'));
app.get('/',(req,res) => {res.send("OK") })
  

app.set('views', './views') 
app.set('view engine', 'ejs') 
app.get('/fruit', function(req, res){ 
   res.render('fruit', {fruits: ['banana', 'apple']}) 
})

 
app.listen(8000);
console.log('Server is ready!');