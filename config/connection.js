const mysql = require("mysql");

const connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "basicUser",
	password: "password",
	database: "burger_stand"
});

connection.connect(error => {
	if (error) throw error;

	console.log(`Connected as id: ${connection.threadId}`);
});


module.exports = connection;