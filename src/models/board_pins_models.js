const board_pinsQuery = require('../queries/board_pins_query')

const fetchBoardPins = () => {
  console.log('Hey!!!! I am model')
  let board_pins = board_pinsQuery.fetchBoardPins()

  return board_pins.then(result => {
    return result.length < 1
      ? { error: 'error retrieving boardPins', status: 404 }
      : result
  })
}

const findBoardPins = (id) => {
  console.log('Hey!!!! I am model')
  let board_pins = board_pinsQuery.findBoardPins(id)

  return board_pins.then(result => {
    return !result
      ? { error: 'error retrieving boardPins', status: 404 }
      : result
  })
}

const createBoardPins = (payload) => {
  // console.log('Hey!!!! I am model')
  let board_pins = board_pinsQuery.createBoardPins(payload)

  return board_pins.then(result => {
    return !result
      ? { error: 'error retrieving boardPins', status: 404 }
      : result
  })
}

const updateBoardPins = (payload, id) => { 
  // console.log('Hey!!!! I am model')
  let board_pins = BoardPinsQuery.updateboard_pins(payload, id)

  return board_pins.then(result => {
    console.log(result)
    return !result
      ? { error: 'error retrieving boardPins', status: 404 }
      : result
  })
}

const delPins = (id) => {
  let board_pins = board_pinsQuery.delUBoardPins(id)
  return board_pins.then(result => {
    return !result
      ? { error: 'error retrieving boardPins', status: 404 }
      : result
  })
}

module.exports = {
    fetchBoardPins,
    findBoardPins,
    createBoardPins,
    updateBoardPins,
    delBoardPins
  }