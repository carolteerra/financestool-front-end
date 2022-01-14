import React from 'react'
import Card from '../components/cards'
import FormGroup from '../components/form-group'

class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input
                          type="email"
                          // // value={this.state.email}
                          // onChange={e =>
                          //   this.setState({ email: e.target.value })
                          // }
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email"
                        />
                      </FormGroup>
                      <FormGroup
                        label="Senha: *"
                        htmlFor="exampleInputPassword1"
                      >
                        <input
                          type="password"
                          // value={this.state.senha}
                          // onChange={e =>
                          //   this.setState({ senha: e.target.value })
                          // }
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </FormGroup>
                      <button
                        // onClick={this.entrar}
                        className="btn btn-info"
                      >
                        <i className="pi pi-sign-in"></i>Entrar
                      </button>
                      <button
                        // onClick={this.prepareCadastrar}
                        className="btn btn-primary"
                      >
                        <i className="pi pi-plus"></i> Cadastrar
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default Login