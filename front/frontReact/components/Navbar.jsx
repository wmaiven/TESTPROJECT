import { Link } from "react-router-dom"
import "./Navbar.css"; // Importa o arquivo CSS


const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/palindromo">Palindromo</Link>
        <Link to="/caixa">Contador de Troco de caixa</Link>
        <Link to="/CadastroVeiculo">Cadastro de Veiculo</Link>
        <Link to="/ConsultaCep">Consulta de CEP</Link>
    </nav>
  )
}

export default Navbar