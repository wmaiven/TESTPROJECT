import { Veiculo } from './Veiculo';

export class Carro implements Veiculo {
  Modelo: string;
  AnoFabricacao: number;
  QuantidadePortas: number;
  Marca: string;

  constructor(modelo: string, anoFabricacao: number, portas: number, marca: string) {
    this.Modelo = modelo;
    this.AnoFabricacao = anoFabricacao;
    if (portas >= 2 && portas <= 4) {
      this.QuantidadePortas = portas;
    } else {
      throw new Error("Quantidade de portas inválida para um carro.");
    }
    this.Marca = marca;
  }
}
