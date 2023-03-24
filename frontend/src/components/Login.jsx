import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import ToastMessage from './UI/ToastMessage.jsx';
import {IsEmail} from '../utils/is_email.js';




export default function Login({ submitHandler, toastMsg, setToastMsg, closeToastMsg }) {

	const nodeRef = useRef(null);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = (e) => {
		e.preventDefault();
		if (!email || !password) {
			setToastMsg('Email and password fields must be filled');
		} else if (!IsEmail(email)) {
			setToastMsg('Email not valid');
		} else if (email && password) {
			submitHandler({ email, password });
		}
		setTimeout(() => {
			closeToastMsg();
		}, 3000);

	};

	function handleEmail(e) {
		setEmail(e.target.value);
	};

	function handlePassword(e) {
		setPassword(e.target.value);
	};

	return (
		<div className="Login">

			<CSSTransition
				in={!!toastMsg}
				timeout={1000}
				nodeRef={nodeRef}
				classNames="show-alert"
				mountOnEnter
				unmountOnExit
			>
				<div ref={nodeRef}>
					{
						toastMsg &&
						<ToastMessage
							toastMsg={toastMsg}
							closeToastMsg={closeToastMsg}
							toastType="error"
							toastTitle="ERROR!"
						/>
					}
				</div>
			</CSSTransition>

			<div className="container">
				<h2>Login</h2>
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
						<button onClick={login}>Login</button>
						<Link to="/registration"><p>Registration</p></Link>
					</div>
				</form>
			</div>
		</div>
	)
}
