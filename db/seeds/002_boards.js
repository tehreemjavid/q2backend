exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('boards')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('boards').insert([
        {
          id: 1,
          user_id: 2,
          name: 'Tom',
          description: 'Myspace'
         
          },

          {
            id: 2,
            user_id: 1,
            name: 'Tom',
            description: 'Myspace'
           
            },
  
        {
          id: 3,
          user_id: 2,
          name: 'Tom',
          description: 'Myspace'
         
          }

      ])
    })
    
}