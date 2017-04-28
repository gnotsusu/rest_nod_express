/**
 * Created by sapphirerd on 4/12/17.
 */
var express = require('express'),
    app = express(),
    router = express.Router(),
    db = require('./db.js'),
    port = process.env.PORT || 8081,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

/* Call Controller Block */
app.use('/cases', require('./controllers/cases'));
app.use('/users', require('./controllers/users'));

/* Call Application Block */
db.connect(function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.');
        process.exit(1);
    } else {
        app.listen(port, function() {
            console.log('Listening on port '+ port);
        })
    }
});