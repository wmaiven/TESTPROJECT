import axios from 'axios';
import { useState } from 'react';
const CadastroVeiculo = () => {
  const [tipo, setTipo] = useState('')
  const [modelo, setModelo] = useState('');
  const [anoFabricacao, setAnoFabricacao] = useState('');
  const [portas, setPortas] = useState("");
  const [passageiros, setPassageiros] = useState('');
  const [marca, setMarca] = useState('');
  const [data, setData] = useState(null);

  const handleChangeModelo = (event) => {
    parseInt(event.target.value);
     setModelo(event.target.value);
  };
  const handleChangeAnoFabricacao = (event) => {
    setAnoFabricacao(event.target.value);
 };
 const handleChangePortas = (event) => {
  setPortas(event.target.value);
}
  const handleChangePassageiros = (event) => {
    setPassageiros(event.target.value);
  };
  const handleChangeMarca = (event) => {
    setMarca(event.target.value);
  };
  const handleChangeTipo = (event) => {
    if (portas === "null" || portas === undefined || portas === "0"|| portas === "") {
      setTipo("moto");
     }else{
       setTipo("carro");
     };
  };
 
  const handleSubmit = async () => {
    event.preventDefault();
    // Fazer a requisição POST para o backend com os dados do veículo
    await axios.post('http://localhost:5172/criarVeiculo', {
      tipo,
      modelo,
      anoFabricacao,
      portas,
      passageiros,
      marca, 
    })
      .then((response) => {  
        if(response.data !== undefined){
          setData(response.data);
        }
        console.log(data.dbveiculos.veiculos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
     
    <div className="container">
        <hr />
        <div className="card mt-4">
            <div className="card-header">
                <h2> Cadastre seu Veiculo</h2>
            </div>
            <div className="card-body">
                  <form onSubmit={handleSubmit} method="post" id="form">
                    <label>Modelo:</label>
                    <input className="form-control" name="modelo" type="text" placeholder="Digite o modelo" value={modelo} onChange={handleChangeModelo} />
                    <br />
                    <label>Ano de Fabricação:</label>
                    <input className="form-control" name="anoFabricacao" type="number" placeholder="Digite o ano de fabricação" value={anoFabricacao} onChange={handleChangeAnoFabricacao} />
                    <br />
                    <label>Número de Portas:</label>
                    <input className="form-control" name="portas" type="number" placeholder="Digite o número de portas" value={portas} onChange={handleChangePortas} />
                    <br />
                    <label>Número de Passageiros:</label>
                    <input className="form-control" name="passageiros" type="number" placeholder="Digite o número de passageiros" value={passageiros} onChange={handleChangePassageiros}/>
                    <br />
                    <label>Marca:</label>
                    <input className="form-control" name="marca" type="text" placeholder="Digite a marca" value={marca} onChange={handleChangeMarca} />
                    <br />
                    <button type="submit" onClick={handleChangeTipo}>Enviar</button>
                  </form>
                  {data != undefined && data != null? (<a href='/Veiculoscadastrados'><button>Mostrar veicuos cadastrados</button></a>) :null}
            </div>
        </div>
    </div>

  );
};

export default CadastroVeiculo;
