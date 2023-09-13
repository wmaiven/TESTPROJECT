"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, anoFabricacao, portas, marca) {
        this.Modelo = modelo;
        this.AnoFabricacao = anoFabricacao;
        if (portas >= 2 && portas <= 4) {
            this.QuantidadePortas = portas;
        }
        else {
            throw new Error("Quantidade de portas inválida para um carro.");
        }
        this.Marca = marca;
    }
}
exports.Carro = Carro;
