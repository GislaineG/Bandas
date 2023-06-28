const connection = require('./db');

function getArtistas(req, res) {
  connection.connect(function(err) {
    connection.query("SELECT * FROM artistas", function (err, result) {
      if (err) throw err;
      res.send(JSON.stringify(result))
    }); 
  });
}

function getArtistaById(req, res, id) {
  connection.connect(function(err) {
    connection.query(`SELECT * FROM artistas WHERE ID = ${id}`, function (err, result) {
      if (err) throw err;
      res.send(JSON.stringify(result))
    }); 
  });
}

module.exports = {
  getArtistas,
  getArtistaById
};