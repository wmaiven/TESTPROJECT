"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const dbVeiculos_js_1 = require("./db/dbVeiculos.js");
class Moto {
    constructor(modelo, anoFabricacao, passageiros, marca) {
        this.QuantidadePortas = 0;
        this.Rodas = 2;
        this.Modelo = modelo;
        this.AnoFabricacao = anoFabricacao;
        this.Passageiros = passageiros;
        this.Marca = marca;
    }
    criarMoto(tipo, modelo, anoFabricacao, portas, passageiros, marca) {
        dbVeiculos_js_1.dbveiculos.veiculos.moto.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca });
        return new Moto(modelo, anoFabricacao, passageiros || 1, marca || '');
    }
}
exports.Moto = Moto;
