import React from 'react'

import './Nav.css'

import NavLink from './NavLink'

export default function (props) {
	return (
		<aside className="menu-area">
			<nav className="menu">
				<NavLink goto="" icon="home" title="Início" />	
				<NavLink goto="users" icon="users" title="Usuários" />	
			</nav>
		</aside>
	)

}

