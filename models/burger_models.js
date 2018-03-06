const orm = require("../config/orm.js");

const burger = {
	// functions here as
	// function : function(val) {..},

	all: (callback) => {
		orm.all("burgers", response => {
			callback(response);
		});
	},
	create: (name,callback) => {
		orm.create("burgers", name, response => {
			callback(response);
		});
	},
	delete: (id,callback) => {
		orm.delete("burgers",id, response => {
			callback(response);
		})
	}

};

module.exports = burger;