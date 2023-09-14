// Importação de módulos necessários
const express = require("express");
const app = express();
const cors = require("cors");
const palindromoController = require("./palindromo/palindromoController");
const caixaController = require("./caixa/caixaController");
const bodyParser = require('body-parser');
const VeiculosController = require('./CadastroVeiculo/VeiculosController.js');
const cepController = require('./CEPAPI/cepController.js');
app.use(bodyParser.json());
app.use(cors());

app.use('/', palindromoController);
app.use('/', caixaController);
app.use('/', VeiculosController);
app.use('/', cepController);


// Inicialização do servidor na porta 5172
app.listen(5172, () => {
    console.log("APP RODANDO!");
});