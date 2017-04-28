/**
 * Created by sapphirerd on 4/17/17.
 */
var express = require('express'),
    jwt = require('jsonwebtoken'),
    bodyParser = require('body-parser'),
    model = require("../models/user");


var router = express.Router(),
    jsonParser = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({extended: false});

router.use(function(req, res, next){
    console.log("Time request : "+Date.now());
    next();
});

router.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    res.send(req.body);
});

router.post("/author", jsonParser, function (req, res) {

    if (!req.body) return res.sendStatus(400);

    var user = req.body.username;
    var pass = req.body.password;

    model.authorization(user, pass, function (err, rows) {
        if (err)  res.json({error : err});
        res.json({error: err, author: rows});
    });
});

router.get('/all', function(req, res){
    model.all(function(err, rows){
        if (err) return res.json({error : err});
        res.json({error: err, users : rows});
    });
});

module.exports = router;