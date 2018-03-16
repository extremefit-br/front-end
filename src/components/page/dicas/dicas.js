import React, {Fragment} from 'react'
import Menu from '../../menu/menu.js'
import Container from '../../container/container.js'
import Form from '../../form/form.js'
import Input from '../../form/formInput/formInput.js'
import Button from '../../form/formButton/formButton.js'
import './dicas.css'

const Dicas = () => (
	<Fragment>
		<Menu />
		<Container className="dicas">
			<Form className="form-cadastro">
				<h1 className="form-cadastro__titulo">Dicas</h1>
				<label className="form-cadastro__label" for="desc">Descrição</label>
				<textarea className="form-cadastro__campo" name="" id="desc" cols="30" rows="10"></textarea>
				<label className="form-cadastro__label" for="dicaTipo">Tipo</label>
				<select className="form-cadastro__campo" id="dicaTipo">
					<option value="dor">Dor</option>
					<option value="saude">Saude</option>
					<option value="nutricao">Nutrição</option>
				</select>
				<ul className="form-cadastro__lista-botao">
					<Button className="botao">Adicionar Dica</Button>
					<Button className="botao">Pesquisar Dica</Button>
					<Button className="botao">Remover Dica</Button>
				</ul>
			</Form>
		</Container>
	</Fragment>
)

export default Dicas