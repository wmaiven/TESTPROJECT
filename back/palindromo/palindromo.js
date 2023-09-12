const isPalindromo = (numero) => {
    const numeroString = numero.toString();
    const numeroReverso = numeroString.split('').reverse().join('');
    return numeroString === numeroReverso;
}

const palindromo = (numero1, numero2) => {
    const resultado = [];
    for (let i = numero1; i <= numero2; i++) {
        if (i>10){
        if (isPalindromo(i)) {
            resultado.push(i);
        }
    }
    }
    return resultado;
}

module.exports = palindromo;