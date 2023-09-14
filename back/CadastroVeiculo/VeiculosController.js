const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um roteador Express
const { Carro } = require('./Carro'); // Importa a classe Carro do arquivo Carro.js
const { Moto } = require('./Moto'); // Importa a classe Moto do arquivo Moto.js
const dbVeiculos = require('./db/dbVeiculos'); // Importa o banco de dados de veículos
const criarcarro = new Carro(); // Instancia um novo objeto da classe Carro
const criarmoto = new Moto(); // Instancia um novo objeto da classe Moto

router.post('/criarVeiculo', (req, res) => {
  const tipo = req.body.tipo.toString(); // Obtém o tipo de veículo da requisição
  const modelo = req.body.modelo.toString();  // Obtém o modelo do veículo da requisição
  const anoFabricacao = parseInt(req.body.anoFabricacao); // Obtém o ano de fabricação e converte para inteiro
  const portas = parseInt(req.body.portas); // Obtém o número de portas e converte para inteiro
  const passageiros = parseInt(req.body.passageiros); // Obtém o número de passageiros e converte para inteiro
  const marca = req.body.marca.toString(); // Obtém a marca do veículo da requisição
  
  if (tipo === "moto") {
    try {
     criarmoto.criarMoto(tipo, modelo, anoFabricacao, portas, passageiros, marca); // Cria uma nova moto
     res.json(dbVeiculos); // Retorna o banco de dados de veículos atualizado como resposta
    } catch (error) { 
      res.status(400).json({ error: error.message }); // Em caso de erro, retorna uma resposta de erro com a mensagem
    }
  } else {
    try {
    criarcarro.criarCarro(tipo, modelo, anoFabricacao, portas, passageiros, marca); // Cria um novo carro
    res.json(dbVeiculos); // Retorna o banco de dados de veículos atualizado como resposta

  } catch (error) {
    res.status(400).json({ error: error.message }); // Em caso de erro, retorna uma resposta de erro com a mensagem
  }
  }
});

router.get('/mostrarveiculos',(req, res)  =>{
  res.json(dbVeiculos); // Retorna o banco de dados de veículos como resposta
});

module.exports = router; // Exporta o roteador Express
