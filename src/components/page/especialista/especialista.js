import React, { Fragment, Component } from 'react'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import FormInput from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import './especialista.css'

class Especialista extends Component {
	constructor(props) {
		super(props)
		this.state = { ...props }
	}
	render() {	
		return (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Especialista</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="nome">Nome</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="nome"/>
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="especialidade">Especialidade</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="especialidade" />
							</div>
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="dicaTip">E-mail</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="email" type="email" autoComplete="email" aria-label="email"  />
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="nome">Senha</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" type="password" id="senha" autoComplete="current-password" aria-label="senha" />
							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao">Adicionar</Button></li>
							<li><Button className="form-cadastro__botao">Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					</Form>
				</Container>
			</Fragment>
		)
	}
}

export default Especialista