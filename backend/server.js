const express = require("express");
const connect = require("./Config/connect");
const app = express();
const cors = require("cors");

const port = 3002;

const appRouters = require("./Routes/appRouters");
app.use(express.json());
app.use(cors());
app.use("/", appRouters)
// call the connect function to db
connect();

//requests

// Running server
app.listen(port, (e) =>
  e
    ? console.log("somthing went wrong with the server")
    : console.log(`Example app listening on port ${port}!`)
);
