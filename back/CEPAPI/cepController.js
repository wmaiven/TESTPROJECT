const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');
const obterCEP = require('./obterCEP'); //

router.post('/ConsultaCep/post', async (req, res) => {
    const cep1 = req.body.cep1;
    const cep2 = req.body.cep2;
    const cep3 = req.body.cep3;
    const cep4 = req.body.cep4;
    const cep5 = req.body.cep5;
    const ceps = [cep1, cep2, cep3, cep4, cep5];
    let data = [];

    for (let i = 0; i < ceps.length; i++) {
        const resultadoCEP = await obterCEP(ceps[i]);
        data.push(resultadoCEP);
    }
    res.json(data);
});

module.exports = router;
