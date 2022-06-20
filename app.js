const express = require("express");
const cookieParser = require("cookie-parser")

const app = express();
app.use(express.json());
app.use(cookieParser());

const student = require("./routers/studentrouter")
const faculty = require("./routers/facultyRouter")
app.use("/api/v1/student", student);
app.use("/api/v1/faculty", faculty);
module.exports = app
