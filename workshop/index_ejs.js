var express = require('express')
var app = express()
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/fruit', function (req, res) {
    res.render('fruit', { fruits: ['banana', 'apple','papaya'], foo: 'bar' })
})
app.listen(8000)
console.log('Server is ready!');

