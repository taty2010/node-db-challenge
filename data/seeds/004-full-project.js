
exports.seed = function(knex, Promise) {
      return knex('full_project').insert([
        {project_id: 1, resource_id: 1},
        {project_id: 2, resource_id: 2},
        {project_id: 3, resource_id: 3}
      ]);
};
