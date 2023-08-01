const connection = require('./db');

function getbandas(req, res) {
    connection.connect(function(err) {
        connection.query("SELECT * FROM bandas", function(err, result){
            if (err) throw err;
            res.send(JSON.stringify(result))
        });
    });
}

module.exports = {
    getbandas
};