exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('board_pins')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('board_pins').insert([{
          board_id: 2,
          pin_id: 3
        },
        {
          board_id: 2,
          pin_id: 3

        },
        {
          board_id: 2,
          pin_id: 3

        }
      ])
    })
}