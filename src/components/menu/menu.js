import React from 'react'
import LogoVidaSaudavel from '../page/login/logo_vida_saudavel.png'
import './menu.css'

const Menu = () =>(
	<nav className="navbar">
		<img className="align-center" src={LogoVidaSaudavel} alt="" />
		<ul className="list">
			<li className="list__item">Dicas</li>
			<li className="list__item">Empresa</li>
			<li className="list__item">Especialista</li>
		</ul>
	</nav>
)

export default Menu