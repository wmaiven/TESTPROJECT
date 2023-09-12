const express = require('express');
const router = express.Router();
const palindromo = require('./palindromo'); 


router.post('/palindromo',  (req, res) =>{
    let numero1 = req.body.numero1;
    let numero2 = req.body.numero2;
   
    res.json(palindromo(numero1,numero2));
});


module.exports = router;