import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import BgVideo from '../assets/video/bg_video.mp4';


export default function AppComponent() {



	const navigate = useNavigate();
	const nodeRef = useRef(null);

	const [transition, setTransition] = useState(false);

	useEffect(() => { setTransition(true) }, []);


	return (
		<div className="AppComponent">
			<div className="overlay">
				<video src={BgVideo} autoPlay loop muted />
			</div>

			<CSSTransition
				in={transition}
				timeout={6000}
				nodeRef={nodeRef}
				classNames="transition"
			>
				<div className="text-container" ref={nodeRef}>
					<h1 onClick={() => navigate("/clients")} ref={nodeRef} >Clients Database</h1>
				</div>
			</CSSTransition>

		</div>
	)
}
