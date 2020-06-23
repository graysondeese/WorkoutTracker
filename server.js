const express = require("express");
const morgan = require("morgan");

const PORT = 1337;

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"))
app.listen(PORT, () => console.log(`Server listening at http://localhost:${PORT}/`))