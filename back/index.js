// Importação de módulos necessários
const express = require("express");
const app = express();
const cors = require("cors");
const palindromoController = require("./palindromo/palindromoController");
app.use(cors());

app.use('/', palindromoController);

// Inicialização do servidor na porta 45679
app.listen(5173, () => {
    console.log("APP RODANDO!");
});