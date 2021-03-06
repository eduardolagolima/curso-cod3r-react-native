module.exports = (app) => {
  app.post('/register', app.api.user.register);
  app.post('/login', app.api.user.login);

  app.route('/tasks')
    .all(app.config.passport.authenticate())
    .get(app.api.task.list)
    .post(app.api.task.save);

  app.route('/tasks/:id')
    .all(app.config.passport.authenticate())
    .delete(app.api.task.remove);

  app.route('/tasks/:id/toggle')
    .all(app.config.passport.authenticate())
    .put(app.api.task.toggleTask);
};
