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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logaUsuario } from '../../../action/login.js'


class Login extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = { email: "admin", senha:"admin@extremefit"}
	// 	this.handleAdd = this.handleAdd.bind(this)
	// }
	handleAdd(){
		// console.log("teste123")
		// const email = this.props.email
		// const senha = this.props.senha
		// console.log(this.props.email + this.props.senha)
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
						<Input className="login__form-input" type="email" placeholder="E-mail" autoComplete="email" aria-label="email" value={this.props.email}/>
					</div>
					<div className="box-campo align-center">
						<FaLock />
						<Input className="login__form-input" type="password" placeholder="Senha" autoComplete="current-password" aria-label="senha" value={this.props.senha}/>
					</div>
					<a className="link-esqueci-senha align-center">Esqueci minha senha</a>
				{/* <Button className="login-botao align-center" onClick={this.handleAdd}>Login</Button> */}
					<Button className="login-botao align-center" onClick={this.props.logaUsuario}>Login</Button>
				{/* </Form>  */}
			</Container>
		)
	}
}

// export default Login

function mapStateToProps(state){
	return {
		email: state.login.email,
		senha: state.login.senha
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ logaUsuario }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)