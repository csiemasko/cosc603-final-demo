var express = require('express');
var app = express();
var port = process.env.PORT || 8080;



app.use(express.static('dist'));
app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/dist/index.html`)
});
app.listen(port);


