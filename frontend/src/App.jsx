import React, { useRef, useState } from 'react';
import axios from "axios";
import { error } from "./utils/error.js";
import { NavLink, Link, useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import CustomLink from "./components/UI/CustomLink.jsx";
import AppComponent from "./components/AppComponent.jsx";
import Login from './components/Login.jsx';


function App() {

	const location = useLocation()
	const currentOutlet = useOutlet()
	const nodeRef = useRef(null);

	const [idToken, setIdToken] = useState(localStorage.getItem('idToken'));
	const [toastMsg, setToastMsg] = useState(null);

	const submitHandler = async (obj) => {
		try {
			const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_APP_FB_KEY}`;
			const { data } = await axios.post(URL, { ...obj, returnSecureToken: true });
			setIdToken(data.idToken);
			localStorage.setItem('idToken', data.idToken)
		} catch (e) {
			setToastMsg(error(e.response.data.error.message));
			setTimeout(() => {
				closeToastMsg();
			}, 3000);
		}
	}

	function closeToastMsg() {
		setToastMsg(null);
	}

	function logout() {
		setIdToken(null);
		localStorage.removeItem('idToken');
	}

	return (
		<>
			{
				idToken
					? (<div className="App" >
						<header className="header" >
							<NavLink to="/"><h2>Home</h2></NavLink>
							<CustomLink to="/clients"><h2>Clients Catalog</h2></CustomLink>
							<NavLink to="/add"><h2>Add new client</h2></NavLink>
							<Link to="/"><h2 onClick={logout}>Log out</h2></Link>
						</header>
						<main className="main">
							{
								location.pathname === "/"
									? <AppComponent />
									: (<SwitchTransition>
										<CSSTransition
											key={location.pathname}
											nodeRef={nodeRef}
											timeout={600}
											classNames="main"
											unmountOnExit
										>
											{(state) => (
												<div ref={nodeRef} className="main">
													{currentOutlet}
												</div>
											)}
										</CSSTransition>
									</SwitchTransition>)
							}
						</main>
					</div>)
					: <Login submitHandler={submitHandler} setToastMsg={setToastMsg} toastMsg={toastMsg} closeToastMsg={closeToastMsg} />
			}
		</>
	)
}

export default App;
