// routes.js
const express = require('express');
const artistasConsulta = require('./artistasQuerys');
const bandasConsulta = require('./bandasQuerys')
const router = express.Router();

router.get('/artistas', (req, res) => {
  const { id } = req.query;

  if (id) {
    // lida com request com parametro ID
    artistasConsulta.getArtistaById(req, res, id);
  } else {
    // lida com request sem parametro ID
    artistasConsulta.getArtistas(req, res);
  }
});

router.get('/bandas',(req, res) => {
  bandasConsulta.getbandas(req, res);
})

module.exports = router;