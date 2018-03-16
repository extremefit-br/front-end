import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Login from './components/page/login/login.js'
import Dicas from './components/page/dicas/dicas.js'
import Footer from './components/footer/footer.js'


const App = () => (
  <React.Fragment>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/dicas" component={Dicas} />
    </Switch>
    <Footer />
  </React.Fragment>
)

export default App