import { Carro } from './Carro';
import { Moto } from './Moto';

export class CriarVeiculos {
  criarVeiculo(tipo: string, modelo: string, anoFabricacao: number, portas?: number, passageiros?: number, marca?: string) {
    if (tipo === 'carro') {
      return new Carro(modelo, anoFabricacao, portas || 4, marca || '');
    } else if (tipo === 'moto') {
      return new Moto(modelo, anoFabricacao, passageiros || 1, marca || '');
    } else {
      throw new Error('Tipo de veículo inválido');
    }
  }
}
