import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import './App.css'
// import Login from './components/page/login/login.js'
// import Dicas from './components/page/dicas/dicas.js'
// import Especialista from './components/page/especialista/especialista.js'
// import Empresas from './components/page/empresas/empresas.js'
import Router from './router.js'
import Footer from './components/footer/footer.js'


const App = () => (
  <React.Fragment>
    {/* <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/dicas" component={Dicas} />
      <Route path="/especialista" component={Especialista} />
      <Route path="/empresas" component={Empresas} />
      <Route component={Login} />
    </Switch> */}
    <Router />
    <Footer />
  </React.Fragment>
)

export default App