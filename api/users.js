module.exports = (app) => {
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
  return { get };
};
