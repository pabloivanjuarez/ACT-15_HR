const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3000;

const tables = [];

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


app.get("/", function (res, req) {
    res.sendFile(path.join(__dirname, "home.html"));
});


app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});


app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/reserve", function (req, res) {
    let temp_obj = {
        name: req.name,
        phone_number: req.phone_number,
        email: req.email,
        id: req.id
    }

    tables.push(temp_obj);
})

app.get("/api/tables", function (req, res) {
    let data = fs.readFileSync('dev/reservations.json', 'utf8');
    data = JSON.parse(data)
    res.json(data)
})


app.get("/api/waitlist", function (req, res) {

})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});