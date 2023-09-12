function calcularTroco(valorCompra, valorEntregue) {
    const troco = valorEntregue - valorCompra;
    const notas100 = Math.floor(troco / 100);
    const notas10 = Math.floor((troco % 100) / 10);
    const notas1 = troco % 10;
    return {
        troco:troco,
        notas100:notas100,
        notas10:notas10,
        notas1:notas1,
        valorCompra:valorCompra,
        valorEntregue:valorEntregue
    }
  }
  

  module.exports = calcularTroco;