const knex = require('./db')

fetchBoardPins = () => {
  return knex('board_pins')
}


findBoardPins = (id) => {
  return knex('board_pins').where('id', id)
}


//Insert new board_pin information
const createBoardPins = (payload) => {
  return knex('board_pins')
    .insert({
      pin_id: payload.pin_id,
      board_id: payload.board_id,
    })
    .returning('*')
    .then(result => {
      return result
    })
    .catch(err => {
      return err.message;
    })
}


// update the board_pins
const updateBoardPins = (payload, id) => {
  console.log(payload)
  console.log(id, 'id')
  return knex('board_pins').where('id', id)
    .update({
      board_id: payload.board_id,
      pin_id: payload.pin_id,
    })
    .then(result => {
      return `The boardID is ${payload.board_id} and the pinID '${payload.pin_id}`
    })
    .catch(err => {
      return err.message;
    })
}

// delete the board_pins

const delBoardPins = (id) => {
  return knex('board_pins')
    .where('id', id)
    .del()
};

module.exports = {
  fetchBoardPins,
  findBoardPins,
  createBoardPins,
  updateBoardPins,
  delBoardPins
}