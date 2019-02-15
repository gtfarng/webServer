var express = require('express') 
var session = require('express-session') 
var app = express()
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

app.use(session(
	{ 
		secret: 'keyboard cat', cookie: 
		{ 
			maxAge: 60000 
		}
	})) 

app.use(function(req, res, next) 
{ 
   var sess = req.session 
   if (sess.views) 
   { 
      sess.views++ 
   } 
   else 
   { 
      sess.views = 1 
   } 
})

app.listen(8000);
console.log('Server is ready!');
