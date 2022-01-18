import React from 'react'
import HeaderImage from '../components/headerImage'
import axios from 'axios'

class Home extends React.Component {
  state = {
    saldo: 0
  }

  componentDidMount() {
    axios.get('http://localhost:8082/api/usuarios/1/saldo').then(response => {
      this.setState({ saldo: response.data })
    })
  }

  render() {
    return (
      <div className="jumbotron">
        <HeaderImage />
        <h1 className="display-3">Bem vindo!</h1>
        <p className="lead">
          Essa é uma ferramenta de gestão de finanças. Utilize-a para o cálculo
          de saldos.
        </p>
        <p className="lead">
          Seu saldo para o mês atual é de R$
          {this.state.saldo}
        </p>
        <hr className="my-4" />
        <p>
          E essa é sua área administrativa, utilize um dos menus ou botões
          abaixo para navegar pelo sistema.
        </p>
        <p className="lead">
          <a
            className="btn btn-info btn-lg"
            href="#/cadastro-usuarios"
            role="button"
          >
            <i className="pi pi-users"></i>
            Cadastrar Usuário
          </a>
          <a
            className="btn btn-primary btn-lg"
            href="#/cadastro-lancamentos"
            role="button"
          >
            <i className="pi pi-money-bill"></i>
            Cadastrar Lançamento
          </a>
        </p>
      </div>
    )
  }
}

export default Home
