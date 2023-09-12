const express = require('express');
const router = express.Router();
const calcularTroco = require('./caixa'); 
const cors = require('cors');
router.use(cors());


router.post('/caixa/post',  (req, res) =>{
    let valorCompra = parseInt(req.body.valorCompra);
    let valorEntregue = parseInt(req.body.valorEntregue);
    let resultado = calcularTroco(valorCompra, valorEntregue);
    console.log(resultado);
    if(resultado === undefined || resultado === null){
        res.status(400)
    }else{
        res.json(resultado);
    }
});


module.exports = router;