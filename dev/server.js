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
    // console.log(req.body)
    let temp_obj = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        id: req.body.id
    };

    let data = fs.readFileSync('dev/reservations.json', 'utf8');
    data_parsed = JSON.parse(data);
    console.log(data_parsed)
    data_parsed.reservations.push(temp_obj);
    console.log(data_parsed)
    fs.writeFileSync('dev/reservations.json', JSON.stringify(data_parsed));

    console.log(temp_obj)
    // tables.push(temp_obj);
})

app.get("/api/tables", function (req, res) {
    let data = fs.readFileSync('dev/reservations.json', 'utf8');
    data = JSON.parse(data)
    res.json(data)
})


app.get("/api/waitlist", function (req, res) {
    let data = fs.readFileSync('dev/reservations.json', 'utf8');
    data = JSON.parse(data)
    res.json(data)
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});