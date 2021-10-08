import React from 'react'
import Main from '../template/Main'

export default function (props) {
	return (
		<Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React.">
			<div className="div display-4">Bem Vindo</div>
			<hr/>
			<p className="mb-0">Sistema para representar a construção de um cadastro desenvolvido em React</p>
		</Main>
	)
}
