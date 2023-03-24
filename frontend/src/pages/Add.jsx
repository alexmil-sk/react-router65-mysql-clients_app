import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Add() {

	const navigate = useNavigate();

	const [client, setClient] = useState({
		name: "Name Surname",
		position: "-",
		age: 0,
		foto: 'https://cs14.pikabu.ru/avatars/3463/x3463517-1402568181.png'
	});

	const handleChange = (e) => {
		setClient((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:5555/clients", client);
			navigate('/clients');
		} catch (err) {
			console.log(err);
		}
	}

	return (

		<div className="Add">
			<h2>Add New Client</h2>
			<form>
				<input type="text" name="name" onChange={handleChange} placeholder="Name" />
				<input type="text" name="position" onChange={handleChange} placeholder="Position" />
				<input type="number" name="age" min="1" onChange={handleChange} placeholder="Age" />
				<input type="text" name="foto" onChange={handleChange} placeholder="Foto" />
				<button onClick={handleClick} >Create</button>
			</form>
		</div>
	)
}
