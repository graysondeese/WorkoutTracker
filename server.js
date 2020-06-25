// requiring proper models
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// Requring routes
require("./routes/html-routes.js")(app)
require("./routes/api-routes.js")(app)
// Starting the server
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}/`);
  });