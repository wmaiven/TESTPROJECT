// Importação de módulos necessários
const express = require("express");
const app = express();
const cors = require("cors");
const palindromoController = require("./palindromo/palindromoController");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

app.use('/', palindromoController);

// Inicialização do servidor na porta 45679
app.listen(5172, () => {
    console.log("APP RODANDO!");
});