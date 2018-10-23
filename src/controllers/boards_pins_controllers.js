const model = require('../models/board_pins_model');

const fetchBoardPins = (req, res, next) => {
    let promise = model.fetchBoardPins()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}

const findBoardPins = (req, res, next) => {
 let id = req.params.id
  let promise = model.findBoardPins(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
//  create 
  const createBoardPins = (req, res, next) => {
  let payload = req.body
  let promise = model.createBoardPins(payload)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// update board_pins
const updateBoardPins = (req, res, next) => {
  let payload = req.body
  let id = req.params.id
  console.log(payload)
  let promise = model.updateBoardPins(payload, id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// delete board_pins 
const deleteBoardPins = (req, res, next) => {
  
  let id = req.params.id
  let promise = model.delUser(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}


module.exports = {
    fetchBoardPins,
    findBoardPins,
    createBoardPins,
    updateBoardPins,
    deleteBoardPins
};