require("dotenv").config();
const express = require("express");
const MovieModel = require("./database/movies");
const UserModel = require("./database/users");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

var mongoose = require("mongoose");
const { json } = require("express");
var mongodb = process.env.MONGODB_URI;
mongoose
  .connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("CONNECTED"));

//localhost:5000
app.get("/", (req, res) => {
  return res.json("welcome to BookMyShow");
});

// localhost:5000/movies
app.get("/movies", async (req, res) => {
  const getAllMovies = await MovieModel.find();
  return res.json(getAllMovies);
});

// localhost:5000/movies/:id
app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const getMovie = await MovieModel.findOne({ _id: id });
  return res.json(getMovie);
});

//localhost:5000/user-register
app.post("/user-register", async (req, res) => {
  const addNewUser = await UserModel.create(req.body);
  return res.json({ userAdded: addNewUser, message: "User was added !!!" });
});

app.listen(5000, () => {
  console.log("my express app is running....successfully");
});
