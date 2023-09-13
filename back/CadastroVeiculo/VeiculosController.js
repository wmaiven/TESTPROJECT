const express = require('express');
const router = express.Router();
const cors = require('cors');
const {Carro} = require('./Carro');
const {Moto} = require('./Moto');
const dbVeiculos = require('./db/dbVeiculos'); //
const criarcarro = new Carro();
const criarmoto = new Moto();

router.post('/criarVeiculo', (req, res) => {
  const tipo = req.body.tipo.toString();
  console.log(tipo);
  const modelo = req.body.modelo.toString();  
  const anoFabricacao = parseInt(req.body.anoFabricacao);
  const portas = parseInt(req.body.portas);
  const passageiros = parseInt(req.body.passageiros);
  const marca = req.body.marca.toString(); 
  if (tipo === "moto") {
    try {
     criarmoto.criarMoto(tipo, modelo, anoFabricacao, portas, passageiros, marca);
     res.json(dbVeiculos); 
    } catch (error) { 
      res.status(400).json({ error: error.message });
    }
  } else {
    try {
    criarcarro.criarCarro(tipo, modelo, anoFabricacao, portas, passageiros, marca);
    res.json(dbVeiculos); 

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  }
});

module.exports = router;
