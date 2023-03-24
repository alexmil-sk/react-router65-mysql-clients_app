import mysql from 'mysql2';
import * as dotenv from 'dotenv';
dotenv.config();


const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;


const dbConnect = mysql.createPool({
	connectionLimit: 100,
	host: MYSQL_HOST,
	port: MYSQL_PORT,
	user: MYSQL_USER,
	password: MYSQL_PASSWORD,
	database: MYSQL_DATABASE
});

const CREATE_CLIENTS_TABLE_SQL = `CREATE TABLE IF NOT EXISTS clients (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	name TEXT,
	position TEXT,
	age INTEGER,
	foto TEXT )
	`;


dbConnect.getConnection((err, connection) => {
	if (!err) {
		console.log('Connected to the MySQL DB with CONNECTION_ID: ' + connection.threadId)

		connection.query(CREATE_CLIENTS_TABLE_SQL, (err) => {
			if (!err) {
				console.log('Clients table has been created')
			} else {
				console.log(err);
				console.log('Books table has not been created')
			}
		})
		connection.release()
	}
});

export default dbConnect;