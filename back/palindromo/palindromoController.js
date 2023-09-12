const express = require('express');
const router = express.Router();
const palindromo = require('./palindromo'); 
const cors = require('cors');
router.use(cors());


router.post('/palindromo/post',  (req, res) =>{
    let numero1 = parseInt(req.body.numero1);
    let numero2 = parseInt(req.body.numero2);
    let resultado = palindromo(numero1, numero2);
    if(resultado === undefined || resultado === null){
        res.status(400)
    }else{
        res.json(resultado);
    }
});

module.exports = router;