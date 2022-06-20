const express = require("express");
const app = require("./app");
// import dotenv from './config/dotenv'

const dotenv = require('dotenv');

dotenv.config({ path: "config/config.env" });
// require('dotenv');
// dotenv.config();
// console.log(process.env);

const connectDatabase = require("./config/database");

connectDatabase();
let port = process.env.PORT;
app.listen(port, function () {
  console.log(`sever is running on port ${port}`);
});