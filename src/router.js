import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route } from 'react-router-dom'
import Login from './components/page/login/login.js'
import Dicas from './components/page/dicas/dicas.js'
import Especialista from './components/page/especialista/especialista.js'
import Empresas from './components/page/empresas/empresas.js'
import Pesquisa from './components/page/pesquisa/pesquisa.js'
import Home from './components/page/home/home.jsx'

export default props =>(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/dicas" component={Dicas} />
        <Route path="/especialista" component={Especialista} />
        <Route path="/empresas" component={Empresas} />
        <Route path="/pesquisa" component={Pesquisa} />
        <Route path="/login" component={Login} />
        <Route component={Home} />
    </Switch>
)