import * as React from 'react'

interface customer {
	id: number,
	name: string
}

interface state {
	customers: customer[]
}

export class Customers extends React.Component<{}, state> {

	constructor(props: any) {
		super(props)

		this.state = {
			customers: []
		}
	}

	componentDidMount() {
		fetch('/api/customers').then((res) => {
			return res.json()
		}).then((data) => {
			this.setState({
				customers: data
			})
		}).catch(err => {
			console.error(err)
		})
	}
	render() {
		return (
			<ul>
				{
					this.state.customers.map(customer => {
						return <li key={customer.id}>{customer.id} - {customer.name}</li>
					})
				}
			</ul>
		)
	}
}

