import React from 'react'
import Navbar from './components/navbar'

import Rotas from './main/rotas'

import 'bootswatch/dist/quartz/bootstrap.css'
import './custom.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Rotas />
      </div>
    )
  }
}
export default App
