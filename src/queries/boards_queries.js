const knex = require('./db')

fetchBoards = () => {
  return knex('boards')
}


findBoards = (id) => {
  return knex('boards').where('id', id)
}


//Insert new boards information
const createBoards = (payload) => {
  return knex('boards')
    .insert({
      user_id: payload.user_id,
      name: payload.name,
      description: payload.description,
    })
    .returning('*')
    .then(result => {
      return result
    })
    .catch(err => {
      return err.message;
    })
}


// update the boards
const updateBoards = (payload, id) => {
  console.log(payload)
  console.log(id, 'id')
  return knex('boards').where('id', id)
    .update({
      user_id: payload.user_id,
      name: payload.name,
      description: payload.description,
    })
    .then(result => {
      return `The board ${payload.name} has been updated to '${payload.description}`
    })
    .catch(err => {
      return err.message;
    })
}

// delete the boards

const delBoards = (id) => {
  return knex('boards')
    .where('id', id)
    .del()
};

module.exports = {
  fetchBoards,
  findBoards,
  createBoards,
  updateBoards,
  delBoards
}