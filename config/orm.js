const connection = require("../config/connection.js");

const orm = {
	// functions here as
	// function : function(val) {..},
	all: (tableName, callback) => {
		//let query = `SELECT * FROM ${tableName};`;
		connection.query("SELECT * FROM burgers;", (error,result) => {
			if (error) {
				console.log(error);
			}
			console.log(result);
			callback(result);
		});
	},
	create: (tableName, name, callback) => {
		let query = `INSERT INTO ${tableName} (name) VALUES ('${name}')`;
		connection.query(query, (error,result) => {
			if (error) throw error;
			callback(result);
		});
	},
	eat: (tableName, id, callback) => {
		let query = `DELETE FROM ${tableName} WHERE id=${id}`;
		connection.query(query, (error,result) => {
			if (error) throw error;
			callback(result);
		});
	}
};

module.exports = orm;