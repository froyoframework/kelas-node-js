var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'notes'
});

exports.connect = function() {
    db.connect(function(err) {
        if (err) throw err
        console.log('connected to DB')
    })
};

exports.create = function(key, title, body, callback) {
    db.query("INSERT INTO notes ( notekey, title, body) " +
        "VALUES ( ?, ? , ? );", [key, title, body],
        function(err) {
            if (err) callback(err);
            else callback();
        });
}

exports.update = function(key, title, body, callback) {
    db.query("UPDATE notes " +
        "SET title = ?, body = ? " +
        "WHERE notekey = ?", [title, body, key],
        function(err) {
            if (err) callback(err);
            else callback();
        });
}

exports.read = function(key, callback) {
    db.query("SELECT * FROM notes WHERE notekey = ?", [key],
        function(err, row) {
            if (err) callback(err);
            else callback(null, row);
        });
}

exports.destroy = function(key, callback) {
    db.query("DELETE FROM notes WHERE notekey = ?;", [key],
        function(err) {
            if (err) callback(err);
            else callback();
        });
}

exports.titles = function(callback) {
    var titles = [];
    db.each("SELECT notekey, title FROM notes",
        function(err, row) {
            if (err) callback(err);
            else titles.push({
                key: row.notekey,
                title: row.title
            });
        },
        function(err, num) {
            if (err) callback(err);
            else callback(null, titles);
        });
}
