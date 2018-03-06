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
	})

router.delete("/api/burgers/:id", (request,response) => {
	burger.delete(request.body.id, (result) => {
		response.json({ id: result.insertId });
	})
})
})

module.exports = router;