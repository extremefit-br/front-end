import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addDica, getDica } from '../../../action/dica'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import './dicas.css'
import decode from 'jwt-decode';

class Dicas extends Component {

	constructor(props) {
		super(props);
		this.state = { isInvalid: false }
		// this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}

	handleSearch(event) {
		console.log("teste evento pesquisa")

		let usuarioId = decode(localStorage.getItem('usuario'))

		console.log(usuarioId.Nome)
		this.props.buscaDicas(event)
	}

	handleAdd(event) {
		event.preventDefault()

		let usuarioId = decode(localStorage.getItem('usuario'))

		const dica = {
			descricao: this.descricao,
			usuarioId: usuarioId.Nome
		}

		this.props.adicionaDica(dica)

	}

	handleChange(name, value, isInvalid) {
		this[name] = value
		this.setState({ isInvalid })
	}

	render() {
		const { usuario } = this.props

		console.log(this.props.dicas)
		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Dicas</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="descricao">Descrição</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="descricao"
									placeholder="Descrição"
									aria-label="descricao"
									onChange={this.handleChange} />
							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleAdd}>Adicionar</Button></li>
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleSearch}>Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					</Form>

					<ul>

						{
							this.props.dicas && this.props.dicas.map(dica => (
								<li>
									{dica.descricao}<br />
									{dica.usuarioId}<br />
								</li>
							))
						}

					</ul>
				</Container>
			</Fragment>
		) : (
				<Redirect to="/login" />
			)
	}
}


const mapStateToProps = state => ({
	usuario: state.usuario,
	dicas: state.dica
})

const mapDispatchToProps = dispatch => ({
	buscaDicas: (event) => {
		event.preventDefault()
		dispatch(getDica())
	},
	adicionaDica: (dica) => {
		dispatch(addDica(dica))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Dicas)