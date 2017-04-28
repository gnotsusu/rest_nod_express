var db = require('../db.js');

exports.all = function(done){
    db.get().query("SELECT * FROM moe_main.login", function(err, rows){
        if (err) return done(err);
        done(null, rows);
    });
};

exports.findById = function(userName, passWord, done ){
    db.get().query('SELECT * FROM moe_main.login WHERE username = ? AND pwd = ? ', [userName, passWord], function(err, rows){
        if(err) return done(err);
        done(null, rows);
    });
};

exports.authorization = function (userName, passWord, done) {
    db.get().query('SELECT * FROM moe_main.login WHERE username = ? AND pwd = ? ', [userName, passWord], function(err, rows) {
        if(err) return done(err);
        done(null, rows);
    })
};