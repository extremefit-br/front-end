import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addDica, getDica } from '../../../action/dicas.js'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import FormTextarea from '../../form/formTextarea/formTextarea.js'
import FormSelect from '../../form/formSelect/formSelect.js'
import Button from '../../form/formButton/formButton.js'
import './dicas.css'

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
		this.props.buscaDica(event)
	}

	handleAdd(event) {
		event.preventDefault()

		const empresa = {
			desc: this.desc,
			tipo: this.tipo
		}

		this.props.adicionaDica(empresa)

	}

	handleChange(name, value, isInvalid) {
		this[name] = value
		this.setState({ isInvalid })
	}

	render() {
		const { usuario } = this.props	
		return usuario ? (
			<Fragment>
				<Menu />
				<Container className="main">
					<Form className="form-cadastro">
						<h1 className="form-cadastro__titulo">Dicas</h1>
						<FormLabel className="form-cadastro__label" for="desc">Descrição</FormLabel>
						<FormTextarea className="form-cadastro__campo" name="" id="desc" cols="30" rows="10">{this.state.desc}</FormTextarea>
						<FormLabel className="form-cadastro__label" for="dicaTip">Tipo</FormLabel>
						<FormSelect className="form-cadastro__campo" id="dicaTipo" value={this.state.tipo}>
							<option value="dor">Dor</option>
							<option value="saude">Saude</option>
							<option value="nutricao">Nutrição</option>
						</FormSelect>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleAdd}>Adicionar</Button></li>
							<li><Button className="form-cadastro__botao" type="button" onClick={this.handleSearch}>Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					</Form>

					<ul>

						{
							this.props.dicas && this.props.dicas.map(dicas => (
								<li>
									{dicas.desc}<br />
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
	buscaDica: (event) => {
		event.preventDefault()
		dispatch(getDica())
	},
	adicionaDica: (dica) => {
		dispatch(addDica(dica))
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Dicas)