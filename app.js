import express from "express";
import fs from "fs"

require("dotenv").config();

const app = express();
const morgan = require("morgan")
const bodyParser = require('body-parser')

app.use(morgan('dev'));
app.use(bodyParser.json())


app.get("/", (req, res) => {
  res.send("You have successfully set up node js api")
})

// accept origin from different client
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*", "https://cis2023-sg-team-f67d4a89d176.herokuapp.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// route
fs.readdirSync("./routes").map((r) =>
	  app.use("/", require(`./routes/${r}`))
	);

const port = process.env.PORT || 8000;

app.listen(port, () => {console.log(`Listening at port ${port}`)})