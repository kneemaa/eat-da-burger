const connection = require("../config/connection.js");

const orm = {
	all: (tableName, callback) => {
		connection.query("SELECT * FROM ??;",[tableName],(error,result) => {
			if (error) {
				console.log(error);
			}
			callback(result);
		});
	},
	create: (tableName, name, callback) => {
		let query = "INSERT INTO ?? (burger_name) VALUES (?);";
		connection.query(query,[tableName,name], (error,result) => {
			if (error) throw error;
			callback(result);
		});
	},
	delete: (tableName, id, callback) => {
		let query = "INSERT INTO ?? (id) VALUES (1) WHERE ID=(?);";
		connection.query(query, [tableName,id], (error,result) => {
			if (error) throw error;
			callback(result);
		});
	}
};

module.exports = orm;