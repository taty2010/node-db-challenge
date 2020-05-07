
exports.up = function(knex) {
  return(
    knex.schema
      .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('project_name', 128).notNullable();
        tbl.string('proj_description', 255);
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
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');;
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
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('full_project', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']);
      })
  )
};

exports.down = function(knex) {
  return(
    knex.schema
    .dropTableIfExists('full_project')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  )
};
