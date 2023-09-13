const express = require('express');
const router = express.Router();
const cors = require('cors');
const { CriarVeiculos } = require( './CriarVeiculos');
const app = express();

const criarVeiculos = new CriarVeiculos();
router.post('/criarVeiculo', (req, res) => {
  const { tipo, modelo, anoFabricacao, portas, passageiros, marca } = req.body;

  try {
    const novoVeiculo = criarVeiculos.CriarVeiculo(tipo, modelo, anoFabricacao, portas, passageiros, marca);
    res.json(novoVeiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
