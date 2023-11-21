require("dotenv").config({
  path: "./.env",
});

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const cors = require("cors");
const path = require("path");



// middleares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const emailRoute = require("./routes/emailRoute");

// --------------------------deployment on heroku------------------------------

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

app.use("/api", emailRoute); 

console.log(process.env.PORT);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server has started on port: ", PORT);
});
