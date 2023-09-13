import { Carro } from './Carro';
import { Moto } from './Moto';
import { dbveiculos } from './db/dbVeiculos';
export class CriarVeiculos {
     criarVeiculo(tipo: string, modelo: string, anoFabricacao: number, portas?: number, passageiros?: number, marca?: string) {
    if (tipo === 'carro') {
      dbveiculos.veiculos.carro.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca});
      return new Carro(modelo, anoFabricacao, portas || 4, marca || '');
    } else if (tipo === 'moto') {
      dbveiculos.veiculos.carro.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca});
      return new Moto(modelo, anoFabricacao, passageiros || 1, marca || '');
    } else {
      throw new Error('Tipo de veículo inválido');
    }
  }
}
