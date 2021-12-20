module.exports = (app) => {
  // GET
  const get = (req, res) => {
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
  };
  // POST / SAVE

  const save = (req, res) => {
    const user = { ...req.body };

    return res.json(user);
  };

  return { get, save };
};
