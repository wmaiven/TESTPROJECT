"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
class Moto {
    constructor(modelo, anoFabricacao, passageiros, marca) {
        this.QuantidadePortas = 0;
        this.Rodas = 2;
        this.Modelo = modelo;
        this.AnoFabricacao = anoFabricacao;
        if (passageiros >= 1 && passageiros <= 2) {
            this.Passageiros = passageiros;
        }
        else {
            throw new Error("Quantidade de passageiros inválida para uma moto.");
        }
        this.Marca = marca;
    }
}
exports.Moto = Moto;
