import { Veiculo } from './Veiculo';
import { dbveiculos } from './db/dbVeiculos';

export class Carro implements Veiculo {
  Modelo: string;
  AnoFabricacao: number;
  QuantidadePortas: number;
  Marca: string;

  constructor(modelo: string, anoFabricacao: number, portas: number, marca: string) {
    this.Modelo = modelo;
    this.AnoFabricacao = anoFabricacao;
    this.QuantidadePortas = portas;
    this.Marca = marca;
  }
   criarCarro(tipo: string, modelo: string, anoFabricacao: number, portas?: number, passageiros?: number, marca?: string) {
      dbveiculos.veiculos.carro.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca});
      return new Carro(modelo, anoFabricacao, portas || 4, marca || '');
  }
  
}
