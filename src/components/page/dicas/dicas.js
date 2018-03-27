import React, { Fragment, Component } from 'react'
import { postDica, getDica } from '../../../api/dicas.js'
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
		super(props)
		this.state = { desc: "", tipo: "" }
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		const desc = this.state.desc
		postDica(desc, 3)
	}
	handleSearch() {
		getDica(3)
	}
	render() {	
		return (
			<Fragment>
				<Menu />
				<Container className="main">
					{/* <Form className="form-cadastro"> */}
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
							<li><Button className="form-cadastro__botao" onClick={this.handleAdd}>Adicionar</Button></li>
							<li><Button className="form-cadastro__botao" onClick={this.handleSearch}>Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					{/* </Form> */}
				</Container>
			</Fragment>
		)
	}
}


export default Dicas