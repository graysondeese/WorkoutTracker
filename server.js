// requiring proper models
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = 1337;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Set up promises with mongose
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds047335.mlab.com:47335/heroku_b4w5vxsk", { useNewUrlParser: true }, {useMongoClient: true});

// Requring routes
require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)
// Starting the server
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
  });