import { Veiculo } from './Veiculo';
import { dbveiculos } from './db/dbVeiculos.js';

export class Moto implements Veiculo {
  Modelo: string;
  AnoFabricacao: number;
  QuantidadePortas: number = 0;
  Marca: string;
  Rodas: number = 2;
  Passageiros: number;

  constructor(modelo: string, anoFabricacao: number, passageiros: number, marca: string) {
    this.Modelo = modelo;
    this.AnoFabricacao = anoFabricacao;
    this.Passageiros = passageiros;
    this.Marca = marca;
    }
   criarMoto(tipo: string, modelo: string, anoFabricacao: number, portas?: number, passageiros?: number, marca?: string) {
    dbveiculos.veiculos.moto.push({ tipo: tipo, modelo: modelo, anoFabricacao: anoFabricacao, portas: portas, passageiros: passageiros, marca: marca});
    return new Moto(modelo, anoFabricacao, passageiros || 1 , marca || '');
}
}
