var express = require('express');
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieParser = require('cookie-parser')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

ensureAuthenticated=(req, res, next)=> 
{
      if (req.isAuthenticated()) 
      {
        return next();
      }
      res.redirect('/');
}

const users =
{
    "gtfarng@gmail.com": "240311"
}

userAuth = (usrs, uname, passw) => 
{
    if (users.hasOwnProperty(uname)) 
    {
        if (passw == users[uname]) 
        {
            return true;
        }
    }
    return false;
}

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
    ephemeral: true,
    resave: true,
    saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => 
    {
        if (userAuth(users, username, password)) {
            return done(null, username);
        } else {
            return done(null, false)
        }
    }
    )
);

passport.serializeUser( (username, done)=> 
{
    done(null, username);
});

passport.deserializeUser( (username, done)=> 
{
    done(null, username);
});

app.get('/admin', (req, res)=>
{
    res.render('admin', {email:"gtfarng@gmail.com"})
 })
 
app.get("/", (req, res) => 
{
    res.render("login");
});

app.get("/redirect", (req, res) => 
{
    res.render("redirect");
});

app.post('/', (req, res, next) => 
{
    passport.authenticate('local', 
    {
        successRedirect: '/admin',
        failureRedirect: '/redirect',
    })(req, res, next);
});

app.get('/logout', (req, res) => 
{
    req.logout();
    res.redirect('/');
});

app.get('/admin', ensureAuthenticated, (req, res) => {
    res.render('admin')
});

app.listen(8000, () => {
    console.log("Server is ready!");
});