module.exports = (app) => {
  const get = async (req, res) => {
    const categories = await app.database("categories").select("*");

    return res.json(categories);
  };

  const save = async (req, res) => {
    const category = { ...req.body };

    // Validaçao Nome da Imagem
    if (!category.name) {
      return res.status(400).json({ error: "Nome da categoria nao informado" });
    }

    const categoryExists = await app
      .database("categories")
      .where({ name: category.name })
      .first();

    if (categoryExists) {
      return res.status(400).json({ error: "A categoria já existe" });
    }

    category.image = "category.png";

    app
      .database("categories")
      .insert(category)
      .then(() => res.status(200).send())
      .catch((err) => res.status(500).send(err));

    return res.json(user);
  };

  return { save, get };
};
