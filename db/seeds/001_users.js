exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          id: 0,
          first_name: 'Tom',
          last_name: 'Myspace',
          location: 'San Francisco',
          about: 'Created Myspace'
        },
        {
          id: 1,
          first_name: 'Tom',
          last_name: 'Myspace',
          location: 'San Francisco',
          about: 'Created Myspace'

        },
        {
          id: 2, 
          first_name: 'Tom',
          last_name: 'Myspace',
          location: 'San Francisco',
          about: 'Created Myspace'

        }
      ])
    });
}