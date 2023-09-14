const express = require('express'); // Importa o framework Express
const router = express.Router(); // Cria um roteador Express
const obterCEP = require('./obterCEP'); // Importa a função obterCEP do arquivo obterCEP.js

router.post('/ConsultaCep/post', async (req, res) => {
    // Obtém os CEPs do corpo da requisição
    const cep1 = req.body.cep1;
    const cep2 = req.body.cep2;
    const cep3 = req.body.cep3;
    const cep4 = req.body.cep4;
    const cep5 = req.body.cep5;
    
    const ceps = [cep1, cep2, cep3, cep4, cep5]; // Coloca os CEPs em um array
    let data = []; // Inicializa um array vazio para armazenar os dados

    for (let i = 0; i < ceps.length; i++) {
        const resultadoCEP = await obterCEP(ceps[i]); // Chama a função obterCEP para cada CEP e espera pelo resultado
        data.push(resultadoCEP); // Adiciona o resultado ao array 'data'
    }

    res.json(data); // Retorna o array 'data' como resposta JSON
});

module.exports = router; // Exporta o roteador Express
