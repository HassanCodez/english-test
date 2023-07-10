const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/api/wordList", require("./routes/wordListRouter"));
app.use("/api/rank", require("./routes/rankRouter"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
