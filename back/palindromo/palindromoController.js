const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um roteador Express
const palindromo = require('./palindromo'); // Importa a função palindromo do arquivo palindromo.js
const cors = require('cors'); // Importa o módulo de middleware CORS
router.use(cors()); // Adiciona o middleware CORS ao roteador

router.post('/palindromo/post',  (req, res) =>{
    let numero1 = parseInt(req.body.numero1); // Obtém o primeiro número da requisição e o converte para inteiro
    let numero2 = parseInt(req.body.numero2); // Obtém o segundo número da requisição e o converte para inteiro
    let resultado = palindromo(numero1, numero2); // Chama a função palindromo com os números obtidos

    if(resultado === undefined || resultado === null){
        res.status(400); // Se o resultado for indefinido ou nulo, retorna um status de erro 400 (Bad Request)
    } else {
        res.json(resultado); // Caso contrário, retorna o resultado como resposta JSON
    }
});

module.exports = router; // Exporta o roteador Express
