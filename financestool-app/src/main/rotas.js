import React from 'react'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  HashRouter
} from 'react-router-dom'
import Home from '../views/home'

function Rotas() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />

        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
      </Switch>
    </HashRouter>
  )
}

export default Rotas
