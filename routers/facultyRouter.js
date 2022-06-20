const express = require("express");
const Router = express.Router();
const { facultyLogin, facultysignup } = require("../controllers/facultycontrollers/facultyProfile");

Router.route("/signin").post(facultysignup);


module.exports = Router;