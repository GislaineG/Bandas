const connection = require('./db');

function getbandas(req, res) {
    connection.connect(function(err) {
        connection.query("SELECT * FROM bandas", function(err, result){
            if (err) throw err;
            res.send(JSON.stringify(result))
        });
    });
}

function postbanda(req, res) {
    let data = req.body
    console.log(data)

    if(data.nome) {
        connection.connect(function(err) {
            connection.query("insert into bandas (nome) values ('" + data.nome + "')")
            res.send('Sucesso ao cadastrar banda')
        })
    }
}

module.exports = {
    getbandas,
    postbanda
};