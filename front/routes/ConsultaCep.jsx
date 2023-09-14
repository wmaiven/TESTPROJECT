import axios from 'axios';
import { useState } from 'react';

const ConsultaCep = () => {
    const[cep1, setCep1] = useState('');
    const[cep2, setCep2] = useState('');
    const[cep3, setCep3] = useState('');
    const[cep4, setCep4] = useState('');
    const[cep5, setCep5] = useState('');
    const[data, setData] = useState(null);

    const handleCep1 = (event) => {
        setCep1(event.target.value);
    };

    const handleCep2 = (event) => {
        setCep2(event.target.value);
    };
    
    const handleCep3 = (event) => {
        setCep3(event.target.value);
    };

    const handleCep4 = (event) => {
        setCep4(event.target.value);
    };

    const handleCep5 = (event) => {
        setCep5(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Make the Axios POST request
        axios.post('http://localhost:5172/ConsultaCep/post', {
            cep1,
            cep2,
            cep3,
            cep4,
            cep5
        })
            .then(response => {
                if (response.data === undefined || response.data === null) {
                    console.log(data);
                }else{
                    setData(response.data);
                    console.log(response.data);
                }   
            })
            .catch(error => {
                console.log(error);
            });         
    };
  return (
    <div className="container">
    <hr />
    <div className="card mt-4">
        <div className="card-header">
            <h2>Consulte 5 CEPs</h2>
        </div>
        <div className="card-body">
              <form onSubmit={handleSubmit} method="post" id="form">
                <label>CEP 1</label>
                <input className="form-control" name="cep1" type="number" placeholder="Digite o CEP 1" value={cep1} onChange={handleCep1} />
                <br />
                <label>CEP 2</label>
                <input className="form-control" name="cep2" type="number" placeholder="Digite o CEP 2" value={cep2} onChange={handleCep2} />
                <br />
                <label>CEP 3</label>
                <input className="form-control" name="cep3" type="number" placeholder="Digite o CEP 3" value={cep3} onChange={handleCep3} />
                <br />
                <label>CEP 4</label>
                <input className="form-control" name="cep4" type="number" placeholder="Digite o CEP 4" value={cep4} onChange={handleCep4}/>
                <br />
                <label>CEP 5</label>
                <input className="form-control" name="cep5" type="number" placeholder="Digite o CEP 5" value={cep5} onChange={handleCep5} />
                <br />
                <button type="submit">Enviar</button>
              </form>
              {data && (
                        <div className="result">
                            <h3>Resultados:</h3>
                            <div className="result-tables">
                                {data.map((cepData, index) => (
                                    !cepData.error && (
                                        <table key={index} className="result-table">
                                            <tbody>
                                                <tr>
                                                    <td>CEP:</td>
                                                    <td>{cepData.cep}</td>
                                                </tr>
                                                <tr>
                                                    <td>Logradouro:</td>
                                                    <td>{cepData.logradouro}</td>
                                                </tr>
                                                <tr>
                                                    <td>Bairro:</td>
                                                    <td>{cepData.bairro}</td>
                                                </tr>
                                                <tr>
                                                    <td>Localidade:</td>
                                                    <td>{cepData.localidade}</td>
                                                </tr>
                                                <tr>
                                                    <td>UF:</td>
                                                    <td>{cepData.uf}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    )
                                ))}
                            </div>
                        </div>
                    )}
        </div>
    </div>
</div>
  )
}

export default ConsultaCep