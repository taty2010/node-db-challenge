const express = require('express');

const Resource = require('./project-model');

const router = express.Router();

router.get('/', ( req, res ) => {
  Resource.findRes()
  .then(proj => {
    res.status(200).json(proj)
  })
})

router.post('/', (req, res) => {
  const data = req.body;

  Resource.addRes(data)
  .then(data => {
    res.status(201).json({proj:req.body});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Resource' });
  });
});

module.exports = router;