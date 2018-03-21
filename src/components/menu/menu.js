import React from 'react'
import LogoVidaSaudavel from '../page/login/logo_vida_saudavel.png'
import './menu.css'

const Menu = () =>(
	<nav className="navbar">
		<img className="align-center" src={LogoVidaSaudavel} alt="" />
		<ul className="list">
			<li className="list__item"><a href="/dicas">Dicas</a></li>
			<li className="list__item"><a href="/empresas">Empresa</a></li>
			<li className="list__item"><a href="/especialista">Especialista</a></li>
		</ul>
	</nav>
)

export default Menu