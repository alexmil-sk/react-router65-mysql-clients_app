import React from 'react';


function ToastMessage({ toastMsg, closeToastMsg, toastType, toastTitle }) {

	return (
				<div className={`ToastMessage	${toastType}`} >
					<div>
						<h3>{toastTitle}</h3>
						<p>{toastMsg}</p>
					</div>

					<span onClick={closeToastMsg} >&times;</span>
				</div >
	)
}

export default ToastMessage;