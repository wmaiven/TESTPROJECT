import { Link } from "react-router-dom"
import "./Navbar.css"; // Importa o arquivo CSS


const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/palindromo">Palindromo</Link>
        <Link to="/caixa">Contador de Troco de caixa</Link>
    </nav>
  )
}

export default Navbar