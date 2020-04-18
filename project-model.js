const db = require('./data/dbConfig');

module.exports = {
  find,
  findRes,
  findTask,
  add,
  addRes,
  addTask,
}

function find(){
  return db('projects')
}

function findRes(){
  return db('resources')
}

function findTask(){
  return db('tasks as t')
    .join('projects as p', 'p.id', '=', 't.project_id')
    .select('t.id', 't.description', 'p.project_name', 'p.description')
    // .where('t.project_id', 'p.id')
}

function add(project) {
  return db('projects')
    .insert(project)
}

function addRes(resource) {
  return db('resources')
    .insert(resource)
}

function addTask(task) {
  return db('tasks')
    .insert(task)
}
