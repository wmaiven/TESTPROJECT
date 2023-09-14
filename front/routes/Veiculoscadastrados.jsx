import axios from 'axios';
import { useState, useEffect } from 'react';

const Veiculoscadastrados = () => {
  const [data, setData] = useState(null);


  const consultaDB = () => { 
  axios.get("http://localhost:5172/mostrarveiculos").then((res) => {
    setData(res.data) 
    console.log(res.data);
  }).catch((err) => {
    console.log();(err);
  });
}
useEffect(() => {
  consultaDB(); // Chama consultaDB quando o componente é montado
}, []);
  return (
    <div>
    <h2>Veículos Cadastrados</h2>
    <h3>Carros</h3>
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Ano de Fabricação</th>
          <th>Número de Portas</th>
          <th>Número de Passageiros</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        {data && data.dbveiculos.veiculos.carro.map((carro, index) => (
          (carro.modelo && carro.anoFabricacao && carro.portas && carro.passageiros && carro.marca) && (
            <tr key={index}>
              <td>{carro.modelo}</td>
              <td>{carro.anoFabricacao}</td>
              <td>{carro.portas}</td>
              <td>{carro.passageiros}</td>
              <td>{carro.marca}</td>
            </tr>
          )
        ))}
      </tbody>
    </table>

    <h3>Motos</h3>
    <table>
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Ano de Fabricação</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        {data && data.dbveiculos.veiculos.moto.map((moto, index) => (
          (moto.modelo && moto.anoFabricacao && moto.marca) && (
            <tr key={index}>
              <td>{moto.modelo}</td>
              <td>{moto.anoFabricacao}</td>
              <td>{moto.marca}</td>
            </tr>
          )
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Veiculoscadastrados