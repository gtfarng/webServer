var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require('cookie-parser')

var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

let users = [    {username: "gtfarng@gmail.com", password: "240311"}  ];


/*
app.get('/',  (req, res)=> {
    res.header("Content-Type", "application/json; charset=utf-8");
    res.send('Hello, World!\n')
})
*/

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    cookieName: 'session',
    secret: 'webauth',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true
  }));

/*  
app.use(session({
    secret: 'keyboard cat',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
}));
*/

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/',  (req, res)=> {
    res.render('login')
})

app.get('/admin',  (req, res)=> {
    res.render('admin' ,{name:req.session.username})
})

app.get('/logout',  (req, res)=> {
    res.render('login')
})

app.get('/redirect',  (req, res)=> {
    res.render('redirect')
})








/*
app.listen(8000);
console.log('Server is ready! @ localhost:8000');
*/
app.listen(8000,(req,res)=>{
    console.log("Server is ready! @ localhost:8000");
  });