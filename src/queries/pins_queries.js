const knex = require('./db')

fetchPins = () => {
  return knex('pins')
}


findPins = (id) => {
  return knex('pins').where('id', id)
}


//Insert new pins information
const createPins = (payload) => {
  return knex('pins')
    .insert({
    name: payload.name,
    description: payload.description,
    url: payload.url 
    })
    .returning('*')
    .then(result => {
      return result
    })
    .catch(err => {
      return err.message;
    })
}


// update the pins
const updatePins = (payload, id) => {
  console.log(payload)
  console.log(id, 'id')
  return knex('pins').where('id', id)
    .update({
      user_id: payload.user_id,
      name: payload.name,
      description: payload.description,
    })
    .then(result => {
      return `The pin ${payload.name} has been updated to '${payload.description}`
    })
    .catch(err => {
      return err.message;
    })
}

// delete the pins

const delPins = (id) => {
  return knex('pins')
    .where('id', id)
    .del()
};

module.exports = {
  fetchPins,
  findPins,
  createPins,
  updatePins,
  delPins
}