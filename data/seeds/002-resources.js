
exports.seed = function(knex, Promise) {
      return knex('resources').insert([
        {id: 1, resource_name: 'React', description: 'software', project_id: 2},
        {id: 2, resource_name: 'Motherboard', description: 'hardware', project_id: 1},
        {id: 3, resource_name: 'an actual plan', description: 'a plan', project_id: 3}
      ]);
};
