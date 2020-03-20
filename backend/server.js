const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => console.log("MongoDB database connection has been established!"));

const excercisesRouter = require("./Routes/excercises");
const usersRouter = require("./Routes/users");

app.use("/excercises", excercisesRouter);
app.use("/users", usersRouter);

app.listen(5000, function() {
	console.log("Server has started!");
});