import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import {
	readCatalog, updateClient, getClient, addClient, deleteClient
} from "./utils/dbActions.js";


const AXIOS_PORT = process.env.AXIOS_PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
	res.send('Backend has been initialized...');
});


app.get("/clients", readCatalog);

app.put("/clients/:id", updateClient);

app.get("/clients/:id", getClient);

app.post("/clients", addClient);

app.delete("/clients/:id", deleteClient);


app.listen(AXIOS_PORT, () => {
	console.log(`Express has been started on port: ${AXIOS_PORT}`);
});