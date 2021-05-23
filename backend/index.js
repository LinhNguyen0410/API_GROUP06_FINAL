const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8082",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("../app/models");

const connStr =
    "mongodb+srv://tamtran:tam@tran@2020@dgnl-hcmue.8yayn.mongodb.net/Group_06?retryWrites=true&w=majority";
db.mongoose
    .connect(connStr, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to group 06" });
});
// student
const student_router = require("../app/routes/student.routes");
app.use("/api/students", student_router);
// class

const class_router = require("../app/routes/classes.routes");
app.use("/api/classes", class_router);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});