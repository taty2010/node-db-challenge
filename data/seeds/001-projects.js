
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {id: 1, project_name: 'Build a PC', description: 'Learn to build a pc', completed: true},
        {id: 2, project_name: 'Learn React JS', description: 'Learn how to use React JS', completed: true},
        {id: 3, project_name: 'Rule the World', description: 'Try to take over the world', completed: false}
      ]);
};
