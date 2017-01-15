var express = require('express')
var morgan = require('morgan');

var app = express()

app.use(morgan('dev'));

app.get('/bundle.js', function (req, res) {
    res.sendFile('/app/bundle.js');
});

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(80, function () {
  console.log('Server listening on http://localhost:80, Ctrl+C to stop')
})
