const express = require("express");
const app = express();

app.get("/teste", function (req, res) {
  console.log("Express Funcionando com Nodemon");
});

app.listen(3000);
