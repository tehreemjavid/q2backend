exports.up = function(knex, Promise) {
    return knex.schema.createTable('board_pins', table => {
      table.increments()
      table.integer('board_id')
      // table.foreign('board_id').references('boards.id').onDelete('cascade')
      table.integer('pin_id')
      // table.foreign('pin_id').references('pins.id').onDelete('cascade')
      table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('board_pins')
  };