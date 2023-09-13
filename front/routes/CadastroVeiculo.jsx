import axios from 'axios';
import { useState } from 'react';

const CadastroVeiculo = () => {
  const [modelo, setModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [quantidadePortas, setQuantidadePortas] = useState('');
  const [marca, setMarca] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Fazer a requisição POST para o backend com os dados do veículo
    axios.post('http://localhost:5172/veiculos', {
      modelo,
      anoFabricacao,
      quantidadePortas,
      marca,
    })
      .then((response) => {
        setMensagem('Veículo cadastrado com sucesso!');
      })
      .catch((error) => {
        setMensagem('Erro ao cadastrar veículo.');
      });
  };

  return (
    <div>
      <h2>Cadastro de Veículo</h2>
      <form onSubmit={handleSubmit}>
        <label>Modelo:</label>
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <br />
        <label>Ano de Fabricação:</label>
        <input
          type="number"
          value={anoFabricacao}
          onChange={(e) => setAnoFabricacao(e.target.value)}
        />
        <br />
        <label>Quantidade de Portas:</label>
        <input
          type="number"
          value={quantidadePortas}
          onChange={(e) => setQuantidadePortas(e.target.value)}
        />
        <br />
        <label>Marca:</label>
        <input
          type="text"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <br />
        <button type="submit">Cadastrar Veículo</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CadastroVeiculo;
