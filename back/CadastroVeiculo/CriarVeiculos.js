"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarVeiculos = void 0;
const Carro_1 = require("./Carro");
const Moto_1 = require("./Moto");
const dbVeiculos_1 = require("./db/dbVeiculos");
class CriarVeiculos {
    criarVeiculo(tipo, modelo, anoFabricacao, portas, passageiros, marca) {
        if (tipo === 'carro') {
            dbVeiculos_1.dbveiculos.veiculos.carro.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca });
            return new Carro_1.Carro(modelo, anoFabricacao, portas || 4, marca || '');
        }
        else if (tipo === 'moto') {
            dbVeiculos_1.dbveiculos.veiculos.carro.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca });
            return new Moto_1.Moto(modelo, anoFabricacao, passageiros || 1, marca || '');
        }
        else {
            throw new Error('Tipo de veículo inválido');
        }
    }
}
exports.CriarVeiculos = CriarVeiculos;
