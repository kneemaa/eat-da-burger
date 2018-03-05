const express = require('express');
const mysql = require('mysql')
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const routes = require("./controllers/burgers_controller.js");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
	console.log(`App is now listening on port: ${PORT}`);
})