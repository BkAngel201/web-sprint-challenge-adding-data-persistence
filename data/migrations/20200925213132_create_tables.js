exports.up = function (knex) {
  return knex.schema
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable().unique();
      tbl.string("description", 256).notNullable();
    })
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 128).notNullable();
      tbl.string("description", 256).notNullable();
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl.integer("project_id").references("projects.id");
      tbl.integer("resource_id").references("resources.id");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description", 256).notNullable();
      tbl.string("notes", 256);
      tbl.boolean("completed").defaultTo(false);
      tbl.integer("project_id").notNullable().references("projects.id");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("project_resources")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources");
};
