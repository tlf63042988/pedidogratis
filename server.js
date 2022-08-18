var express = require('express'),
    app = express();

const path = require('path');


app.use(express.static(__dirname + 'www'));

app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/adl', routeHandler);

app.set('port', process.env.PORT || 5000);



app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


