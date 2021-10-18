module.exports = (app) => {
  app.post('/register', app.api.user.register);
  app.post('/login', app.api.user.login);
};
