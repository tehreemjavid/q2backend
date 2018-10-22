const knex = require('./db')

fetchUsers = () => {
  return knex('users')
}


findUser = (id) => {
  return knex('users').where('id', id)
}


//Insert new User information
const createUser = (payload) => {
  return knex('users')
    .insert({
      first_name: payload.first_name,
      last_name: payload.last_name,
      about: payload.about,
      location: payload.location
    })
    .returning('*')
    .then(result => {
      return result
    })
    .catch(err => {
      return err.message;
    })
}


// update the user
const updateUser = (payload, id) => {
  console.log(payload)
  console.log(id, 'id')
  return knex('users').where('id', id)
    .update({
      first_name: payload.first_name,
      last_name: payload.last_name,
      about: payload.about,
      location: payload.location
    })
    .then(result => {
      return `Welcome ${payload.first_name}! Your userId '${payload.id}' has been updated`
    })
    .catch(err => {
      return err.message;
    })
}

// delete the user

const delUser = (id) => {
  return knex('users')
    .where('id', id)
    .del()
};

module.exports = {
  fetchUsers,
  findUser,
  createUser,
  updateUser,
  delUser
}