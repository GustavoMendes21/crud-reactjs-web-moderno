import React from 'react'
import { Link } from 'react-router-dom'


import './NavLink.css'

export default function (props) {
	return (
		<>
			<Link to={`/${props.goto}`}>
				<i className={`fa fa-${props.icon}`}></i>
				<span>{props.title}</span>
			</Link>
		</>
	)
}