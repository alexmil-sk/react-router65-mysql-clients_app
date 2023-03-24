import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { error } from "../utils/error.js";

export default function Registration() {

	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');


	const registrate = async (e) => {
		try {
			e.preventDefault();
			const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_APP_FB_KEY}`;
			const { data } = await axios.post(URL, { email: email, password: password, returnSecureToken: true });
			if (data.idToken) {
				alert("Registration was successfull!");
			}
			navigate("/");
		} catch (e) {
			if (e.response.data.error.message.includes('WEAK_PASSWORD')) {
				alert("Password should be at least 6 characters");
			} else {
				alert(error(e.response.data.error.message));
			}
		}
	}

	function handleEmail(e) {
		setEmail(e.target.value);
	};

	function handlePassword(e) {
		setPassword(e.target.value);
	};

	return (
		<div className="Registration">
			<div className="container">
				<h2>Registration</h2>
				<form>
					<input
						type="email"
						autoComplete="false"
						placeholder="Email"
						onChange={handleEmail}
						value={email}
					/>
					<input
						type="password"
						autoComplete="false"
						placeholder="Password"
						onChange={handlePassword}
						value={password}
					/>
					<div className="form-footer">
						<button onClick={registrate}>Registrate</button>
						<Link to="/"><p>Log in</p></Link>
					</div>
				</form>
			</div>
		</div>

	)
}
