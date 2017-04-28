/**
 * Created by sapphirerd on 4/12/17.
 */

var db = require('../db.js');

exports.all = function (done) {
    db.get().query("SELECT * FROM comp_case", function (err, rows) {
        if (err) return done(err);
        done(null, rows);
    });
};

exports.findById = function (id, done) {
    db.get().query("SELECT * FROM comp_case WHERE case_id = ? ", [id], function (err, rows) {
        if (err) return done(err.stack);
        done(null, rows);
    });
};