const orm = require("../config/orm.js");

const burger = {
	// functions here as
	// function : function(val) {..},

	all: (callback) => {
		orm.all("burgers", response => {
			callback(response);
		});
	},
	create: (callback,name) => {
		orm.create("burgers", name, response => {
			callback(response);
		});
	},

};

module.exports = burger;