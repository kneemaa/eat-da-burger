const express = require("express");
const burger = require("../models/burger_models.js");
const router = express.Router();

router.get("/", (request, response) => {
	burger.all( (data) => {
		response.render("index",{burgers: data});
	});
});

router.post("/api/burgers", (request,response) => {
	burger.create(request.body.burger, (result) => {
		response.json({ id: result.insertId });
	});
});

router.get("/api/burgers", (request,response) => {
	burger.all( (data) => {
		response.json(data);
	});
});

router.put("/api/burgers/:id", (request,response) => {
	burger.eat(request.params.id, (result) => {
		response.sendStatus(200);
	});
});

module.exports = router;