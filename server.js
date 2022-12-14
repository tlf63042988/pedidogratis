var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));
app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Orgin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested_With, COntent-type, Accept');
    next();
});

app.use(express.static('www'));
//app.get('/*', function (req, res) {
 //   res.sendFile(path.join(__dirname, 'www'));
//});

// app.get('/*', (req, res) => res.send('www'));

if (process.env.NODE_ENV === "production") {
  
  //app.get("/*", (req, res) => {
 // res.sendFile(path.join(__dirname, "./www/index.html"));
 // });
 app.get('/*', (req, res) => res.send('<p style="font-size:64px;position:absolute;left:25%;top:35%;"><br><br>Re Ingresar <a href="/">volver</a></p>'));
//app.get('/*', (req, res) => res.send(volver <a href='/'>algo</a>));
}

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
