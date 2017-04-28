/**
 * Created by sapphirerd on 4/12/17.
 */
var express = require('express'),
    model = require("../models/case");

var router = express.Router();

router.use(function(req, res, next){
    console.log("Time request : "+Date.now());
    next();
});

router.get('/', function(req, res){
    res.json({error : 'not found!'});
});

/* Show Case All List */
router.get('/case/all', function (req, res) {
    model.all(function (err, rows) {
        if(err) res.json({error : err});
        res.json({error : err, cases : rows});
    })
});

/* Show Case By Id */
router.get('/case/:id', function (req, res) {
    var id = req.params.id;
    model.findById(id, function(err, rows){
        if(err) res.json({error : err});
        res.json({error : err, cases : rows});
    });
});

module.exports = router;