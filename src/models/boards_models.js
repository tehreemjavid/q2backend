const boards = require('../queries/boards_query')

const fetchBoards = () => {
  console.log('Hey!!!! I am model')
  let boards = boardsQuery.fetchBoards()

  return boards.then(result => {
    return result.length < 1
      ? { error: 'error retrieving boards', status: 404 }
      : result
  })
}

const findBoards = (id) => {
  console.log('Hey!!!! I am model')
  let boards = boardsQuery.findBoards(id)

  return boards.then(result => {
    return !result
      ? { error: 'error retrieving boards', status: 404 }
      : result
  })
}

const createBoards = (payload) => {
  // console.log('Hey!!!! I am model')
  let boards = boardsQuery.createBoards(payload)
   return boards.then(result => {
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