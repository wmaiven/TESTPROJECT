import "./home.css"
const Home = () => {
  return (
    <div class="container">
        <h1>Bem-vindo à minha aplicação</h1>
        <div class="box">
            <h2>Desafio 1: Números Palíndromos</h2>
            <p>Para encontrar números palíndromos, clique <a href="./palindromo">aqui</a>.</p>
        </div>
        <div class="box">
            <h2>Desafio 2: Troco em Notas</h2>
            <p>Para calcular o troco em notas, clique <a href="./Caixa">aqui</a>.</p>
        </div>
        <div class="box">
            <h2>Desafio 3: Gerenciamento de Veículos</h2>
            <p>Para gerenciar veículos, clique <a href="./CadastroVeiculo">aqui</a>.</p>
        </div>
        <div class="box">
            <h2>Desafio 4: Consumir API VIACep</h2>
            <p>Para descobrir informações sobre algum CEP, clique <a href="./ConsultaCep">aqui</a>.</p>
        </div>
    </div>
  )
}

export default Home