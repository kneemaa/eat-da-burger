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
	eat: (tableName, id, callback) => {
		let query = "UPDATE ?? SET is_eaten=1 WHERE id=(?);";
		connection.query(query, [tableName, id], (error,result) => {
			if (error) throw error;
			callback(result);
		});
	}
};

module.exports = orm;