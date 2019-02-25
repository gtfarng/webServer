const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(session({
    cookieName: 'session',
    secret: 'webauth',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
    httpOnly: true,
    secure: true,
    ephemeral: true,
    resave: true,
    saveUninitialized: true
  }));

const users =
{
    "gtfarng@gmail.com": "240311"
}

app.get('/', (req, res)=>
{
   res.render('login')
})

app.get('/admin', (req, res)=>
{
   if(users!=='null')
   {
     	res.render("admin",{email:"gtfarng@gmail.com"});
   }
 	else
 	 	res.render("redirect");
})

app.post("/", (req, res) => 
{
    res.render("login");
    res.send('Result = ');
});

app.post("/logout", (req, res) => 
{
    res.render("login");
});

app.post("/admin", (req, res) => 
{
	if(users!=='null')
     	res.render("admin",{email:"gtfarng@gmail.com"});
 	else
 	 	res.render("redirect");
});


app.listen(8000,()=>
{
   console.log("Server is ready!");
});