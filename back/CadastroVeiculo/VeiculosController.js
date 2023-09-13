"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculosController = void 0;
const Carro= require("./Carro");
const Moto = require("./Moto");
class VeiculosController {
    criarCarro(modelo, anoFabricacao, portas, marca) {
        return new Carro.Carro(modelo, anoFabricacao, portas, marca);
    }
    criarMoto(modelo, anoFabricacao, passageiros, marca) {
        return new Moto.Moto(modelo, anoFabricacao, passageiros, marca);
    }
}
exports.VeiculosController = VeiculosController;
