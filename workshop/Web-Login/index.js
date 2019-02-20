const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require("express-session");

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
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
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
    res.render('admin', {email: "gtfarng@gmail.com" , password: '240311'})
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