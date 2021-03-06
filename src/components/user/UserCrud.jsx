import React, { Component } from 'react'
import axios from 'axios'

import Main from '../template/Main'

const headerProps = {
	icon: 'users',
	title: 'Usuários',
	subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'

const initalState = {
	user: { name: '', email: '' },
	list: []
}

export default class UserCrud extends Component {
	state= {...initalState}

	componentWillMount() {
		axios(baseUrl)
			.then( resp => {
				this.setState({list: resp.data })
			})
	}

	clear() {
		this.serState({ user: initalState.user })
	}

	save() {
		const user = this.state.user
		const method = user.id ? 'put' : 'post'
		const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

		axios[method](url, user)
			.then(resp => {
				const list = this.getUpdatedList(resp.data)
				this.setState({user: initalState.user, list})
			})
	}

	getUpdatedList(user) {
		const list = this.state.list.filter(u => u.id !== user.id)
		list.unshift(user)

		return list
	}

	updateField(event) {
		const user = { ...this.state.user }
		user[event.target.name] = event.target.value
		this.setState({ user })
	}

	renderForm() {
		return (
			<div className="form">
				<div className="row">
					<div className="col-12 col-md-6">
						<div className="form-group">
							<label htmlFor="name">Nome: </label>
							<input className="form-control" type="text" name="name"
                             	value={this.state.user.name}
                             	onChange={ e => this.updateField(e)}
                             	placeholder="Digite seu nome..."  
							/>
						</div>
					</div>

					<div className="col-12 col-md-6">
						<div className="form-group">
							<label htmlFor="email">E-mail: </label>
							<input className="form-control" type="text" name="email"
                             	value={this.state.user.email}
                             	onChange={ e => this.updateField(e)}
                             	placeholder="Digite seu nome..."  
							/>
						</div>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-12 d-flex justify-content-end">
						<button className="btn btn-primary" onClick={e => this.save(e)}>Salvar</button>
						
						<button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>Cancelar</button>
					</div>
				</div>

			</div>
		)
	}

	render() {
		return (
			<Main {...headerProps}>
				Cadastro de Usuário
				{this.renderForm()}
			</Main>
		)
	}
}