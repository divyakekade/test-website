const express = require("express");
const cookieParser = require("cookie-parser")

const app = express();
app.use(express.json());
app.use(cookieParser());

const student = require("./routers/studentrouter")
const faculty = require("./routers/facultyRouter")
const examination = require("./routers/examinationrouter")
app.use("/api/v1", student);
app.use("/api/v1/faculty", faculty);
app.use("/api/v1/faculty/examination", examination);

module.exports = app
