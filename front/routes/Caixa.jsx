import axios from 'axios';
import { useState } from 'react';
import "./Caixa.css"


const Caixa = () => {
    const [valorCompra, setvalorCompra] = useState("");
    const [valorEntregue, setvalorEntregue] = useState("");
    const [data, setData] = useState(null);
    const handleChange1 = (event) => {
        setvalorCompra(event.target.value);
    };
    const handleChange2 = (event) => {
        setvalorEntregue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Fazer a requisição POST para o backend com os dados do veículo
        axios.post('http://localhost:5172/caixa/post', {valorCompra, valorEntregue})
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
                <h2>Contador de troco de caixa</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} method="post" id="form">
                    <label>Valor da compra:</label>
                    <input className="form-control" name="valorCompra" type="number" placeholder="digita o primeiro nuumero" value={valorCompra} onChange={handleChange1}/>
                    <br />
                    <br></br>
                    <label>Valor entregue:</label>
                    <input className="form-control" name="valorEntregue" type="number" placeholder="digite o segundo numero" value={valorEntregue} onChange={handleChange2} />
                    <br></br>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
                <div>
                    {data != null? (<ul>
                        <table>
                            <tr>
                                <th>valor do troco:</th>
                                <th>notas de 100:</th>
                                <th>notas de 10:</th>
                                <th>notas de 1:</th>
                                <th>Valor da compra:</th>
                                <th>Valor entregue:</th>
                            </tr>
                            <tr>
                                <td>{data.troco}</td>
                                <td>{data.notas100}</td>
                                <td>{data.notas10}</td>
                                <td>{data.notas1}</td>
                                <td>{data.valorCompra}</td>
                                <td>{data.valorEntregue}</td>
                            </tr>
                        </table>
                        
                    </ul>) : null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Caixa