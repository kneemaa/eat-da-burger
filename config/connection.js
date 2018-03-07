const mysql = require("mysql");
const JAWSDB_URL = "otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";


if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	const connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "basicUser",
		password: "password",
		database: "burger_stand"
	});
}
connection.connect(error => {
	if (error) throw error;

	console.log(`Connected as id: ${connection.threadId}`);
});


module.exports = connection;