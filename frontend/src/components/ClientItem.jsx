import React from 'react';
import { Link } from 'react-router-dom';

export default function ClientItem({ client, removeClient }) {

	return (
		<div className="ClientItem">
			{client.foto && <img src={client.foto} alt={client.name} />}
			<h2>{client.name}</h2>
			<p>ID: {client.id}</p>
			<p>Positioh: {client.position}</p>
			<span>Age: {client.age} years</span>
			<div>
				<button onClick={() => removeClient(client.id)} className="btn_delete">DELETE</button>
				<button className="btn_update">
					<Link to={`/update/${client.id}`} state={{ client: client }} >UPDATE</Link>
				</button>
			</div>
		</div>
	)
}
