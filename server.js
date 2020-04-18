const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./projectRouter');
const resourceRouter = require('./resourceRouter');
const tasksRouter = require('./tasksRouter');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', tasksRouter);

server.use('/', ( req, res ) => {
  res.json('Welcome to the Projects API')
})

module.exports = server;