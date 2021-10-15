import express from "express";
let configViewEngine = (app) => {
    // arrow function
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    // view engine giup go duoc cac cau tru if else , logic
    app.set("views", "./src/views");
}
module.exports = configViewEngine;