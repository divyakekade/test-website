const express = require("express");
const { sendSubject, sendPaper, savePaper, addQuestion, deleteQuestion, updateQuestion, sendAllQuestionPapers } = require("../controllers/examination/examinationcontrollers");
const { isfacultyauthenticate } = require("../middleware/authentication");
const Router = express.Router();

Router.route("/setexam").get(isfacultyauthenticate, sendSubject)
module.exports = Router;
Router.route("/setexam/:subject").get(isfacultyauthenticate, sendPaper)
Router.route("/setexam/:subject/createquestionpaper").post(isfacultyauthenticate, savePaper)
Router.route("/setexam/:subject/createquestionpaper/:id").put(isfacultyauthenticate, addQuestion)
Router.route("/setexam/:subject/savepaper/:id").get(isfacultyauthenticate, sendPaper)
Router.route("/setexam/:subject/:paperid/:questionid/delete").get(isfacultyauthenticate, deleteQuestion);
Router.route("/setexam/:subject/:paperid/:questionid/edit").put(isfacultyauthenticate, updateQuestion);
Router.route("/setexam/:subject/availablequestionpaper").get(isfacultyauthenticate, sendAllQuestionPapers);
Router.route("/setexam/:subject/availablequestionpaper/:paperid").delete(isfacultyauthenticate, sendAllQuestionPapers);