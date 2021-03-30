/* eslint-disable consistent-return */
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./server/routes/index");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", routes);
app.use((err, req, res, next) => {
  if (["production", "test", "development"].includes(process.env.NODE_ENV)) res.status(500).json({ error: "internal server error" });
  else return next(err);
});

app.get("/", (req, res) => {
  res.send("Welcome to the API developed by @cbalieiro!!!");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`The API app is listening at http://localhost:${port}`);
});
