import React from 'react'
import LogoVidaSaudavel from '../page/login/logo_vida_saudavel.png'
import './menu.css'

const Menu = () =>(
	<nav className="navbar">
		<img className="align-center" src={LogoVidaSaudavel} alt="" />
		<ul className="list">
			<li className="list__item"><a href="http://localhost:3000/dicas">Dicas</a></li>
			<li className="list__item"><a href="http://localhost:3000/empresas">Empresa</a></li>
			<li className="list__item"><a href="http://localhost:3000/especialista">Especialista</a></li>
		</ul>
	</nav>
)

export default Menu