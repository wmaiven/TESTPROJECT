import axios from 'axios';
import { useState } from 'react';

const Veiculoscadastrados = (validade) => {
  const [data, setData] = useState(null);

  const consultaDB = () => {
  axios.get("http://localhost:5172/mostrarveiculos").then((res) => {
    setData(res.data) 
    console.log(res.data);
  }).catch((err) => {
    console.log();(err);
  });
}
  if (validade === true) {
    consultaDB();
  }

  return (
     <div>
      <table>
        <thead>
          <tr>
            <th>tipo</th>
            <th>modelo</th>
            <th>Ano de Fabricação</th>
            <th>marca</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
      </table>
          
      </div>
  )
}

export default Veiculoscadastrados