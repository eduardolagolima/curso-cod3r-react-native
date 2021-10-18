const bcrypt = require('bcryptjs');

module.exports = (app) => {
  const getHash = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
  };

  const save = async (req, res) => {
    const { name, email, password } = req.body;
    const hash = await getHash(password);

    app.database('users')
      .insert({ name, email, password: hash })
      .then(() => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  return { save };
};
