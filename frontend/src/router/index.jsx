import {
	Link,
	createBrowserRouter,
} from "react-router-dom";
import Clients from '../pages/Clients.jsx';
import App from '../App.jsx';
import Add from '../pages/Add.jsx';
import Update from '../pages/Update.jsx';
import Registration from '../pages/Registration.jsx';


const routes = [
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "clients",
				element: <Clients />
			},
			{
				path: "add",
				element: <Add />
			},
			{
				path: "update/:catId",
				element: <Update />
			},
			{
				path: "*",
				element: (<div><h1>NotFound</h1><Link to="/">Home</Link></div>)
			}
		]
	},
	{
		path: "/registration",
		element: <Registration />
	}
	
];



export const router = createBrowserRouter(
	routes,
);


