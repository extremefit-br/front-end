import React, { Fragment, Component } from 'react'
import { Redirect } from 'react-router-dom'
import { postLogin, getEventos } from '../../../api/login.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import FaUser from 'react-icons/lib/fa/user'
import FaLock from 'react-icons/lib/fa/lock'
import LogoVidaSaudavel from './logo_vida_saudavel.png'
import './login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = { email: "admin", senha:"admin@extremefit"}
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		console.log("teste"+postLogin(email, senha))
		const email = this.state.email
		const senha = this.state.senha
		// postLogin(email, senha)
	}
	render() {
		return (
			<Container className="login">
				<div>
					<img className="align-center" src={LogoVidaSaudavel} alt="" />
				</div>
				{/* <Form > */}
					<div className="box-campo align-center">
						<FaUser />
						<Input className="login__form-input" type="email" placeholder="E-mail" autoComplete="email" aria-label="email" value={this.state.email}/>
					</div>
					<div className="box-campo align-center">
						<FaLock />
						<Input className="login__form-input" type="password" placeholder="Senha" autoComplete="current-password" aria-label="senha" value={this.state.senha}/>
					</div>
					<a className="link-esqueci-senha align-center">Esqueci minha senha</a>
					<Button className="login-botao align-center" onClick={this.handleAdd}>Login</Button>
				{/* </Form>  */}
			</Container>
		)
	}
}

export default Login