const dayjs = require('dayjs');

module.exports = (app) => {
  const getTasks = (req, res) => {
    const date = req.query.date ? req.query.date
      : dayjs().endOf('day').toDate();

    app.database('tasks')
      .where({ userId: req.user.id })
      .where('estimateAt', '<=', date)
      .orderBy('estimateAt')
      .then((tasks) => res.json(tasks))
      .catch((err) => res.status(400).json(err));
  };

  const save = (req, res) => {
    req.body.userId = req.user.id;

    app.database('tasks')
      .insert(req.body)
      .then(() => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  const remove = (req, res) => {
    app.database('tasks')
      .where({ id: req.params.id, userId: req.user.id })
      .del()
      .then((rowsDeleted) => {
        if (rowsDeleted > 0) {
          res.status(204).send();
        } else {
          const msg = `Não foi encontrada task com id ${req.params.id}.`;
          res.status(400).send(msg);
        }
      })
      .catch((err) => res.status(400).json(err));
  };

  const updateTaskDoneAt = (req, res, doneAt) => {
    app.database('tasks')
      .where({ id: req.params.id, userId: req.user.id })
      .update({ doneAt })
      .then(() => res.status(204).send())
      .catch((err) => res.status(400).json(err));
  };

  const toggleTask = (req, res) => {
    app.database('tasks')
      .where({ id: req.params.id, userId: req.user.id })
      .first()
      .then((task) => {
        const doneAt = task.doneAt ? null : new Date();
        updateTaskDoneAt(req, res, doneAt);
      })
      .catch((err) => res.status(400).json(err));
  };

  return {
    getTasks,
    save,
    remove,
    toggleTask,
  };
};
