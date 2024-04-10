// --- import dotenv and express-async-errors
require("dotenv").config();
require("express-async-errors");
// --- import dotenv and express-async-errors

// --- import express and assign it to a variable and invoke it
const express = require("express");
const app = express();
// --- import express and assign it to a variable and invoke it

// --- import database connection function
const connectDB = require("./db/connect");
// --- import database connection function

// --- import middlewares
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorHandlingMiddleware = require("./middlewares/errorHandlingMiddleware");
// --- import middlewares

// --- use the middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(fileUpload({ useTempFiles: true }));
app.use(express.static("./public"));
// --- use the middlewares

// --- import routes from router
// --- import routes from router

// --- api routes "/api/v1"
// --- api routes "/api/v1"

app.get("/", (req, res) => {
	res.send("Boilerplate");
});

// --- invoke our custom middlewares
app.use(notFoundMiddleware);
app.use(errorHandlingMiddleware);
// --- invoke our custom middlewares

// --- assign port and connect server to database
const port = process.env.PORT || 5000;
const start = async () => {
	try {
		// await connectDB(process.env.MONGO_URI);
		app.listen(port, console.log(`Server listening on port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};
// --- assign port and connect server to database
start();
