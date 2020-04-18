const express = require('express');

const Task = require('./project-model');

const router = express.Router();

router.get('/', ( req, res ) => {
  Task.findTask()
  .then(proj => {
    res.status(200).json(proj)
  })
})

router.post('/', (req, res) => {
  const taskData = req.body;

  Task.addTask(taskData)
  .then(task => {
    res.status(201).json({proj:req.body});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Task' });
  });
});

module.exports = router;