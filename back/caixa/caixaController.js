const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um roteador Express
const calcularTroco = require('./caixa'); // Importa o módulo calcularTroco do arquivo caixa.js
const cors = require('cors'); // Importa o módulo de middleware CORS
router.use(cors()); // Adiciona o middleware CORS ao roteador

router.post('/caixa/post',  (req, res) =>{
    let valorCompra = parseInt(req.body.valorCompra); // Obtém o valor da compra da requisição e converte para inteiro
    let valorEntregue = parseInt(req.body.valorEntregue); // Obtém o valor entregue da requisição e converte para inteiro
    let resultado = calcularTroco(valorCompra, valorEntregue); // Chama a função calcularTroco com os valores obtidos
    console.log(resultado); // Exibe o resultado no console

    if(resultado === undefined || resultado === null){
        res.status(400) // Se o resultado for indefinido ou nulo, retorna um status de erro 400 (Bad Request)
    }else{
        res.json(resultado); // Caso contrário, retorna o resultado como resposta JSON
    }
});

module.exports = router; // Exporta o roteador Express
