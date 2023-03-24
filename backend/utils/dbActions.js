import dbConnect from './dbConnection.js';


const readCatalog = (_, res) => {
	const q = "SELECT * FROM clients";
	dbConnect.query(q, (error, data) => {
		if (error) return res.json(error);
		return res.json(data);
	});
};

const updateClient = (req, res) => {
	const q = "UPDATE clients SET `id` = ?, `name` = ?, `position` = ?, `age` = ?, `foto` = ? WHERE id = ?";
	const values = [
		req.body.id,
		req.body.name,
		req.body.position,
		req.body.age,
		req.body.foto,
	];
	const clientId = req.params.id;

	dbConnect.query(q, [...values, clientId], (error, info) => {
		if (error) return res.json(error);
		return res.json("Client has been updated successfully");
	})
};

const getClient = (req, res) => {
	const q = "SELECT * FROM clients WHERE id = ?";
	const id = req.params.id;

	dbConnect.query(q, [id], (error, data) => {
		if (error) return res.json(error);
		console.log(data);
		return res.json(data);
	})
};

const addClient = (req, res) => {

	const q = "INSERT INTO clients (`id`, `name`, `position`, `age`, `foto`) VALUES (?)";
	const values = [
		req.body.id,
		req.body.name,
		req.body.position,
		req.body.age,
		req.body.foto,
	];

	dbConnect.query(q, [values], (error, info) => {
		if (error) return res.json(error);
		return res.json("Client has been created successfully!");
	})
};

const deleteClient = (req, res) => {
	const q = "DELETE FROM clients WHERE id = ?";
	const clientId = req.params.id

	dbConnect.query(q, [clientId], (error, info) => {
		if (error) return res.json(error);
		return res.json("Client has been deleted successfully!");
	})
}

export {
	readCatalog, updateClient, getClient, addClient, deleteClient
};