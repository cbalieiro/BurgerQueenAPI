require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./server/routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Welcome to the API developed by @cbalieiro!!!");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The API app is listening at http://localhost:${port}`);
});
