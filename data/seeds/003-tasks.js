exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {id: 1, description: 'Learn about hooks', notes: 'google is your friend', completed: true, project_id: 2},
    {id: 2, description: 'Figure out what hardware is needed', notes: 'Youtube is your friend', completed: true, project_id: 1},
    {id: 3, description: 'Ask Pinky if he is pondering what Im pondering', notes: 'n/a', completed: false, project_id: 3}
  ]);
};