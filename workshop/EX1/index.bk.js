var express = require('express');
var app = express();

app.use(express.static('image'));
app.get('/', (req, res) => { res.send("OK") })

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/ejs', function (req, res) {

    res.render('index', {
        title: 'This is title of EJS Template',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        names: ['John Doe', 'Jane Doe', 'Jane Dane']
    });
});

app.get('/computer', function (req, res) {

    res.render('Computer', {
        title: 'Computer',
        computers: ['Windows', 'OSX', 'Android', 'IOS'],
    });
});

app.listen(8000);
console.log('Server is ready!');