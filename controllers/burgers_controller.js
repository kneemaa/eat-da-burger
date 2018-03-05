const express = require("express");
const burger = require("../models/burger_models.js");
const router = express.Router();

router.get("/"), (request, response) => {
	burger.all( (data) => {
		console.log("hi");
		response.render("index",{burgers: data});
	});
};


module.exports = router;