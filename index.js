var express = require('express')
var app = express()
app.use(express.static('dist'))
app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
});
app.listen(8081)


