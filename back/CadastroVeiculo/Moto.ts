import { Veiculo } from './Veiculo';

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
    if (passageiros >= 1 && passageiros <= 2) {
      this.Passageiros = passageiros;
    } else {
      throw new Error("Quantidade de passageiros inválida para uma moto.");
    }
    this.Marca = marca;
  }
}
