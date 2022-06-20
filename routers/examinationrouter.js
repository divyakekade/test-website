const express = require("express");
const { sendSubject } = require("../controllers/examination/examinationcontrollers");
const { isfacultyauthenticate } = require("../middleware/authentication");
const Router = express.Router();

Router.route("/setexam").get(isfacultyauthenticate,sendSubject)
module.exports = Router; 