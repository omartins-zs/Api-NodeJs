const express = require("express");
const app = express();
app.use(express.json());

// GET
app.get("/users", function (req, res) {
  const users = [
    {
      id: 1,
      name: "Usuario Jorge",
    },
    {
      id: 2,
      name: "Usuario Fernando",
    },
  ];

  return res.json(users);
});

app.listen(3000);
