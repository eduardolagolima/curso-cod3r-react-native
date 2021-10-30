const jwt = require('jwt-simple');
const bcrypt = require('bcryptjs');

const { generateHash } = require('../utils');

module.exports = (app) => {
  const register = async (req, res) => {
    try {
      const hash = await generateHash(req.body.password);

      await app.database('users').insert({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  const login = async (req, res) => {
    try {
      if (!req.body.email || !req.body.password) {
        return res.status(400).send('Os campos e-mail e senha são obrigatórios');
      }

      const user = await app.database('users').where('email', req.body.email).first();

      if (!user) {
        res.status(400).send('Usuário não cadastrado!');
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        return res.status(401).send('A senha informada é inválida!');
      }

      return res.json({
        name: user.name,
        email: user.email,
        token: jwt.encode(
          { id: user.id, name: user.name, email: user.email },
          process.env.JWT_SECRET,
        ),
      });
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  return {
    register,
    login,
  };
};
