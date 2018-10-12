exports.up = function(knex, Promise) {
    return knex.schema.createTable('pins', table => {
      table.increments()
      table.string('name').notNullable().defaultsTo('')
      table.string('description').notNullable().defaultsTo('')
      table.string('url').notNullable().defaultsTo('')
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pins')
  };