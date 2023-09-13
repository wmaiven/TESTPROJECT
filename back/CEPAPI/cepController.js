const express = require('express');
const router = express.Router();
const cors = require('cors');
const axios = require('axios');


router.post('/ConsultaCep/post', (req, res) => {
    const ceps = {cep1,cep2,cep3,cep4,cep5} = parseInt(req.body);
    console.log(ceps);
});

