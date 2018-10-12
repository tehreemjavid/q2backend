exports.up = function(knex, Promise) {
  return knex.schema.createTable('boards', table => {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('cascade')
      table.string('name').notNullable().defaultsTo('')
      table.string('description').notNullable().defaultsTo('')
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('boards')
  };