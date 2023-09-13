import { Carro } from './Carro';
import { Moto } from './Moto';

export class VeiculosController {
  criarCarro(modelo: string, anoFabricacao: number, portas: number, marca: string) {
    return new Carro(modelo, anoFabricacao, portas, marca);
  }

  criarMoto(modelo: string, anoFabricacao: number, passageiros: number, marca: string) {
    return new Moto(modelo, anoFabricacao, passageiros, marca);
  }
}
