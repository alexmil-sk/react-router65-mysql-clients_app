import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ClientItem from '../components/ClientItem.jsx';
import Loader from '../components/UI/Loader.jsx';

export default function Clients() {

	const [clients, setClients] = useState([]);
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		fetchAllClients();
	}, []);

	const fetchAllClients = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get('http://localhost:5555/clients');

			setTimeout(() => {
				setClients(data);
				setIsLoading(false);
			}, [2000]);

		} catch (e) {
			setIsLoading(false);
			console.log(e)
		}
	}

	const removeClient = async (id) => {
		try {
			await axios.delete(`http://localhost:5555/clients/${id}`);

			const new_clients = [...clients];
			setClients(new_clients.filter(i => i.id !== id));

		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<div className="Clients">
				{
					isLoading
						? <Loader />
						: (clients.length ?
							(clients.map(client => (
								<div key={client.id}>
									<ClientItem client={client} removeClient={removeClient} />
								</div>
							)))
							: (<div className="clients-cat_empty">
								<h2>Catalog is empty...</h2>
								<Link className="client-add_button" to="/add">
									<button>ADD CLIENT</button>
								</Link>
							</div>))
				}
			</div>
		</>
	)
}
