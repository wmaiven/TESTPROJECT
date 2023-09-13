"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const dbVeiculos_1 = require("./db/dbVeiculos");
class Carro {
    constructor(modelo, anoFabricacao, portas, marca) {
        this.Modelo = modelo;
        this.AnoFabricacao = anoFabricacao;
        this.QuantidadePortas = portas;
        this.Marca = marca;
    }
    criarCarro(tipo, modelo, anoFabricacao, portas, passageiros, marca) {
        dbVeiculos_1.dbveiculos.veiculos.carro.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca });
        return new Carro(modelo, anoFabricacao, portas || 4, marca || '');
    }
}
exports.Carro = Carro;
