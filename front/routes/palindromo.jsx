import axios from 'axios';
import { useState } from 'react';


const Palindromo = () => {
    const [numero1, setNumero1] = useState("");
    const [numero2, setNumero2] = useState("");
    const [data, setData] = useState(null);
    const handleChange1 = (event) => {
        setNumero1(event.target.value);
    };
    const handleChange2 = (event) => {
        setNumero2(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Make the Axios POST request
        axios.post('http://localhost:5172/palindromo/post', {numero1, numero2})
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
                <h2> Descubra o palindromo</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} method="post" id="form">
                    <label>numero1</label>
                    <input className="form-control" name="numero1" type="number" placeholder="digita o primeiro nuumero" value={numero1} onChange={handleChange1}/>
                    <br />
                    <br></br>
                    <label>numero2</label>
                    <input className="form-control" name="numero2" type="number" placeholder="digite o segundo numero" value={numero2} onChange={handleChange2} />
                    <br></br>
                    <br />
                    <button type="submit">Enviar</button>
                </form>
                <div>
                    {data != null? (<ul>
                                {data.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul> ): null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Palindromo