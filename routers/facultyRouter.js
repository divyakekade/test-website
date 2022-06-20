const express = require("express");
const { sendSubject } = require("../controllers/examination/examinationcontrollers");
const Router = express.Router();
const { facultyLogin, facultysignup, logout } = require("../controllers/facultycontrollers/facultyProfile");
const { isfacultyauthenticate, isauthenticate } = require("../middleware/authentication");

Router.route("/signup").post(facultysignup);
Router.route("/login").post(facultyLogin)
Router.route("/logout").get(isfacultyauthenticate, logout);
// Router.route("/setexam").get(isauthenticate,sendSubject)


module.exports = Router;