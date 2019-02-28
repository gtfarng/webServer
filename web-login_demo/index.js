var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.post('/admin', urlencodedParser, (req, res)=>
{
    console.log(req.body.user);
    console.log(req.body.pass);
    if(req.body.user=='gtfarng@gmail.com' && req.body.pass=='240311')
    {
        res.render('admin', {admins: ['Hello'] , foo: req.body.user, img:'images', bt: 'Logout' })
        console.log("login Complete")
    }
    else 
    {
        res.render('admin', {admins: ['Please login first'] , foo:'', bt: 'Login'})
        console.log("login Fail")
    }
 })

app.get('/', urlencodedParser, (req, res)=>
{
     res.render('login')
     console.log("login Complete")
 })

app.listen(8000);
console.log("server running :8000")

