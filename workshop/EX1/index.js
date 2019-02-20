var express = require('express');
var app = express();

app.use(express.static('image'));
app.get('/', (req, res) => { res.send("Connect OK!") })

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/computer', function (req, res) {

    res.render('Computer', {
        title: 'Computer',
        computers: ['Windows', 'OSX', 'Android', 'IOS'],
    });
});

app.listen(8000);
console.log('Server is ready!');