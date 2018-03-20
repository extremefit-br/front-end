import React, { Fragment, Component } from 'react'
import { postEmpresas } from '../../../api/empresa.js'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import FormLabel from '../../form/formLabel/formLabel.js'
import FormInput from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import './empresas.css'

class Empresas extends Component {
	constructor(props) {
		super(props)
		this.state = { nomeFantasia: "teste", razaoSocial: "teste", cnae: "teste", cnpj: "teste"}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleChange(e){
		this.setState({ ...this.state, nomeFantasia: e.target.value})
	}
	handleAdd(){
		console.log(this.state)
		const nomeFantasia = this.state.nomeFantasia
		const razaoSocial = this.state.razaoSocial
		const cnae = this.state.cnae
		const cnpj = this.state.cnpj
		postEmpresas(nomeFantasia, razaoSocial, cnae, cnpj)
	}
	render() {	
		return (
			<Fragment>
				<Menu />
				<Container className="main">
					{/* <Form className="form-cadastro"> */}
						<h1 className="form-cadastro__titulo">Empresa</h1>
						<section className="secao-campos">
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="nomeFantasia">Nome Fantasia</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="nomeFantasia" value={this.state.nomeFantasia} onChange={this.handleChange}/>
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="razaoSocial">Razão Social</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="razaoSocial" value={this.state.razaoSocial}/>
							</div>
							<div className="secao-campos__metade">
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cnae">CNAE</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="cnae" value={this.state.cnae} />
								<FormLabel className="form-cadastro__label form-cadastro__label--lineblock" for="cnpj">CNPJ</FormLabel>
								<FormInput className="form-cadastro__campo form-cadastro__campo--input" id="cnpj" value={this.state.cnpj} />
							</div>
						</section>
						<ul className="form-cadastro__lista-botao">
							<li><Button className="form-cadastro__botao" onClick={this.handleAdd}>Adicionar</Button></li>
							<li><Button className="form-cadastro__botao">Pesquisar</Button></li>
							<li><Button className="form-cadastro__botao">Remover</Button></li>
						</ul>
					{/* </Form> */}
				</Container>
			</Fragment>
		)
	}
}


export default Empresas