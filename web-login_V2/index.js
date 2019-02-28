var express = require('express')
var app = express()
var session = require('express-session')
var BodyParser = require('body-parser')
const PORT = 8000;

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({   secret: 'keyboard cat', 
                    cookie: { maxAge: 60000 },
                    resave : true, 
                    saveUninitialized: true }))
app.use(BodyParser())

var status =true ;
app.get('/', (req, res)=>
{
    res.render('login',{status})
 })

app.get('/admin',(req,res)=>
{
    if(req.session.email)
    {
        res.render('admin')
    }
    else
    {
        res.write('<h1>Please login first.</h1>')
		res.write('<a href="/"><button>login</button></a>')
		res.end()
    }
})

app.post('/admin', (req, res)=>{
    if(req.body.username!=='gtfarng@gmail.com'&&req.body.password!=='240311')
    {
        status = false
        res.render('login',{status})
    }
    else
    {
        status =true
        data= 
        {
            email : req.body.email
        }
        req.session.email = req.body.email;
        res.render('admin',{data})
    }
 })

 app.get('/logout',(req,res)=>
 {
     req.session.destroy((err)=>
     {
        // if(err) console.log(err)
        // else 
        res.redirect('/')
     })
 })

app.listen(PORT,()=>
{
    console.log("running : " + PORT)
});