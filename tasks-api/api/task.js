const dayjs = require('dayjs');

module.exports = (app) => {
  const list = async (req, res) => {
    try {
      const date = req.query.date ?? dayjs().endOf('day').toDate();
      const tasks = await app.database('tasks')
        .where({ userId: req.user.id })
        .where('estimateAt', '<=', date)
        .orderBy('estimateAt');

      return res.json(tasks);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  const save = async (req, res) => {
    try {
      await app.database('tasks')
        .insert({
          desc: req.body.desc,
          estimateAt: req.body.estimateAt,
          userId: req.user.id,
        });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  const remove = async (req, res) => {
    try {
      await app.database('tasks')
        .where({ id: req.params.id })
        .del();

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  const toggleTask = async (req, res) => {
    try {
      const task = await app.database('tasks')
        .where({ id: req.params.id })
        .first();
      const doneAt = task.doneAt ? null : new Date();

      await app.database('tasks')
        .where({ id: req.params.id })
        .update({ doneAt });

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  return {
    list,
    save,
    remove,
    toggleTask,
  };
};
