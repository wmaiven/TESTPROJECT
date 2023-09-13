// Importação de módulos necessários
const express = require("express");
const app = express();
const cors = require("cors");
const palindromoController = require("./palindromo/palindromoController");
const caixaController = require("./caixa/caixaController");
const bodyParser = require('body-parser');
const {VeiculosController}  = require('./CadastroVeiculo/VeiculosController.js');

const veiculosController = new VeiculosController();
const meuCarro = veiculosController.criarCarro("Sedan", 2020, 4, "Toyota");
const minhaMoto = veiculosController.criarMoto("Esportiva", 2021, 2, "Honda");


console.log(meuCarro);
console.log(minhaMoto);


app.use(bodyParser.json());
app.use(cors());

app.use('/', palindromoController);
app.use('/', caixaController);

// Inicialização do servidor na porta 45679
app.listen(5172, () => {
    console.log("APP RODANDO!");
});