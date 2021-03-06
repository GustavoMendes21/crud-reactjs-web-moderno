import React from 'react'
import { Link } from 'react-router-dom'


import './Logo.css'
import logo from '../../assets/images/logo.png'


export default function (props) {
	
	return (
		<aside className="logo">
			<Link to="/" className="logo">
				<img src={logo} alt="logo"/>
			</Link>
		</aside>
	)

}