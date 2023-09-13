const express = require('express');
const router = express.Router();
const cors = require('cors');
const {CriarVeiculos} = require('./CriarVeiculos');
const dbVeiculos = require('./db/dbVeiculos'); //
const criarVeiculos = new CriarVeiculos();
router.post('/criarVeiculo', (req, res) => {
  let tipo;
  if (req.body.portas === undefined || req.body.portas === null) {
    tipo = "moto";
  } else {
    tipo = "carro";
  }
  const modelo = req.body.modelo.toString();  
  const anoFabricacao = parseInt(req.body.anoFabricacao);
  const portas = parseInt(req.body.portas);
  const passageiros = parseInt(req.body.passageiros);
  const marca = req.body.marca.toString();  
  try {
    const novoVeiculo = criarVeiculos.criarVeiculo(tipo, modelo, anoFabricacao, portas, passageiros, marca);
    res.json(dbVeiculos); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
