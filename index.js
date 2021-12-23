const express = require("express");
const app = express();
const consign = require("consign");
const database = require("./config/database");

app.use(express.json());
app.database = database;

consign().then("./api").then("./routes/routes.js").into(app);

// PUT
app.put("/users/:id", function (req, res) {
  const idUser = req.params;

  const user = { ...req.body };

  return res.json(idUser);
});

// DELETE
app.delete("/users/:id", function (req, res) {
  const idUser = req.params;

  return res.json(idUser);
});

// GET By ID
app.get("/users/:id", function (req, res) {
  const idUser = req.params;

  return res.json(idUser);
});
app.listen(3000);
