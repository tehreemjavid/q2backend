exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
      table.increments()
      table.string('first_name').notNullable().defaultsTo('')
      table.string('last_name').notNullable().defaultsTo('')
      table.string('location').notNullable().defaultsTo('')
      table.string('about').notNullable().defaultsTo('')
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };