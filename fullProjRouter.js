const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', ( req, res ) => {
  Projects.findFull()
  .then(proj => {
    res.status(200).json(proj)
  })
})

// router.post('/', (req, res) => {
//   const projData = req.body;

//   Projects.add(projData)
//   .then(proj => {
//     res.status(201).json({proj:req.body});
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new Project' });
//   });
// });

module.exports = router;