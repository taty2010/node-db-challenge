
exports.up = function(knex) {
  return(
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
      })
      .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('resource_name', 128).notNullable().unique();
        tbl.string('description', 255);
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
      })
      .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').notNullable().defaultTo(false);
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
      })
  )
};

exports.down = function(knex) {
  return(
    knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  )
};
