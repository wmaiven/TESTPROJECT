const palindromo = (numero1,numero2) => {
        const array = [];
        const arraycopia = [];
        const resultado = [];
    for (let i=0; i <= numero2;i++) {
        array.push(i);
        if (i > 10){
            arraycopia[i] = parseInt(array[i].toString().split('').reverse().join(''));
            if(arraycopia[i] === array[i]) {    
                resultado.push(arraycopia[i]);
            }
        }
    }
    return resultado;

}

module.exports = palindromo;