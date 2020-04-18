const express = require('express');
const helmet = require('helmet');
const projectRouter = require('./projectRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);

server.use('/', ( req, res ) => {
  res.json('Welcome to the Projects API')
})