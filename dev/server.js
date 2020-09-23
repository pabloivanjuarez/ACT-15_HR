const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const arr = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get("/", function (res, req) {
    res.sendFile(path.join(__dirname, "home.html"));
})


app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})


app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.post("/reserve", function (req, res) {
    const temp_obj = {
        name: req.name,
        phone_number: req.phone_number,
        email: req.email,
        id: req.id
    }

    // Save data here
})

app.get("/api/tables", function (req, res) {

})


app.get("/api/waitlist", function (req, res) {

})