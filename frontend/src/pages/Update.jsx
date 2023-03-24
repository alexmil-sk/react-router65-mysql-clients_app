import React, { useState } from 'react';
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export default function Update() {

	const { catId } = useParams();
	const navigate = useNavigate();
	const location = useLocation();


	const [{ client }, _ ] = useState({ ...location.state });
	
	const [id, setId] = useState(client.id);
	const [name, setName] = useState(client.name);
	const [position, setPosition] = useState(client.position);
	const [age, setAge] = useState(client.age);
	const [foto, setFoto] = useState(client.foto);

	const handleClickUpdate = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:5555/clients/${catId}`, { id, name, position, age, foto });
			navigate("/clients");
		} catch (e) {
			console.log(e)
		}
	}

	const handleChangeId = (e) => {
		setId(e.target.value);
	}
	const handleChangeTitle = (e) => {
		setName(e.target.value);
	}
	const handleChangeDesc = (e) => {
		setPosition(e.target.value);
	}
	const handleChangePrice = (e) => {
		setAge(e.target.value);
	}
	const handleChangeCover = (e) => {
		setFoto(e.target.value);
	}

	return (
		<div className="Update">
			<h1>Update Client (ID: {catId})</h1>
			<form>
				<input type="number" name="id" id="id" onChange={handleChangeId} defaultValue={id} />
				<input type="text" name="name" id="name" onChange={handleChangeTitle} defaultValue={name} />
				<input type="text" name="position" id="position" onChange={handleChangeDesc} defaultValue={position} />
				<input type="number" name="age" id="age" onChange={handleChangePrice} defaultValue={age} />
				<input type="text" name="foto" id="foto" onChange={handleChangeCover} defaultValue={foto} />
			</form>
			<button onClick={handleClickUpdate}>Update</button>
			<Link to="/clients"><h3>to Clients Catalog</h3></Link>
		</div>
	)
}
