import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addEvento, getEvento, deleteEvento } from '../../../action/evento'
import { getUnidade } from '../../../action/unidade'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import FaRemove from 'react-icons/lib/ti/delete'
import './eventos.css'
import decode from 'jwt-decode';
import Select from 'react-select';

class Eventos extends Component {

	constructor(props) {
		super(props);
		this.state = { value: '' }
		this.state = { isInvalid: false }

		this.handleChange = this.handleChange.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleChangeDois = this.handleChangeDois.bind(this)
	}

	componentDidMount() {
		this.props.buscaUnidades()
	}

	handleSearch(event) {
		console.log("teste evento pesquisa"+event)
		this.props.buscaEventos(event)
	}

	handleAdd(event) {
		event.preventDefault()

		let usuarioId = decode(localStorage.getItem('usuario'))

		const evento = {
			descricao: this.descricao,
			usuarioId: usuarioId.Nome,
			unidadeFavoritaId: this.state.value
		}

		this.props.adicionaEvento(evento)

	}

	handleChangeDois(event) {
		this.setState({ value: event.target.value });
	}

	handleChange(name, value, isInvalid) {
		this[name] = value
		this.setState({ isInvalid })
	}

	handleDelete(id){
		// event.preventDefault()
		console.log("ID: "+id)
		this.props.deletaEvento(id)
	}

	render() {
		const { usuario } = this.props
		const { unidades } = this.props

		let usuarioId = decode(localStorage.getItem('usuario'))

		console.log(this.props.eventos)
		console.log(this.props.unidades)

		// return usuario && (usuarioId.role == "Especialista" || usuarioId.role == "Admin" || usuarioId.role == "Sesi") ? (
		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Eventos</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="descricao">Descrição</FormLabel>
								<Input
									className="form-cadastro__campo form-cadastro__campo--input"
									type="text"
									name="descricao"
									placeholder="Descrição"
									aria-label="descricao"
									onChange={this.handleChange}
								/>

								<select value={this.state.value} onChange={this.handleChangeDois}>
									{unidades.map(({ id, nomeUnidade }) => (
										<option key={id} value={id}>
											{nomeUnidade}
										</option>
									))}
								</select>

							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleAdd}>Adicionar</Button></li>
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleSearch}>Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					</Form>

					{/*<ul>

						{
							this.props.eventos && this.props.eventos.map(evento => (
								<li>
									{evento.descricao}<br />
									{evento.usuarioId}<br />
									{evento.unidadeFavoritaId}<br />
									{evento.unidade.nomeUnidade}<br />
								</li>
							))
						}

					</ul>*/}

					<table className='table-pesquisa' cellspacing='0'>
						<h1 className="form-cadastro__titulo">Pesquisa</h1>
						<thead>
							<tr>
								<th className='linha'>Id</th>
								<th className='linha'>Descrição</th>
								<th className='linha'>Unidade</th>
								<th className='linha'>Ações</th>
							</tr>
						</thead>
						<tbody>
							{
								this.props.eventos && this.props.eventos.map(evento => (
									
									<tr>
										<td className='linha'>{evento.id}</td>
										<td className='linha'>{evento.descricao}</td>
										<td className='linha'>{evento.unidade.nomeUnidade}</td>
										<td className='linha'><Button className="btn-remover" type="button" 
											onClick={() => this.handleDelete(evento.id)}
										><FaRemove /></Button></td>
									</tr>
								))
							}
						</tbody>
					</table>

					{/* <ul>

						{
							this.props.unidades && this.props.unidades.map(unidade => (
								<li>
									{unidade.id}<br />
									{unidade.nomeUnidade}<br />
								</li>
							))
						}

					</ul> */}


				</Container>
			</Fragment>
		) : (
				<Redirect to="/login" />
			)
	}
}


const mapStateToProps = state => ({
	usuario: state.usuario,
	eventos: state.evento,
	unidades: state.unidade
})

const mapDispatchToProps = dispatch => ({
	buscaEventos: (event) => {
		event.preventDefault()
		dispatch(getEvento())
	},
	adicionaEvento: (evento) => {
		dispatch(addEvento(evento))
	},
	buscaUnidades: () => {
		dispatch(getUnidade())
	}, deletaEvento: (id) => {
		dispatch(deleteEvento(id))
	}

})


export default connect(mapStateToProps, mapDispatchToProps)(Eventos)