
exports.seed = function(knex, Promise) {
      return knex('projects').insert([
        {id: 1, project_name: 'Build a PC', proj_description: 'Learn to build a pc', completed: true},
        {id: 2, project_name: 'Learn React JS', proj_description: 'Learn how to use React JS', completed: true},
        {id: 3, project_name: 'Rule the World', proj_description: 'Try to take over the world', completed: false}
      ]);
};
