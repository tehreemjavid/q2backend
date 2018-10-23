const model = require('../models/pins_models');
const relationshipModel = require('../models/board_pins_models');

const fetchPins = (req, res, next) => {
    let promise = model.fetchPins()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}

const findPins = (req, res, next) => {
 let id = req.params.id
  let promise = model.findPins(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
//  create 
  const createPins = (req, res, next) => {
  let payload = req.body
  let promise = model.createPins(payload)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// update pins
const updatePins = (req, res, next) => {
  let payload = req.body
  let id = req.params.id
  console.log(payload)
  let promise = model.updatePins(payload, id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// delete pins 
const deletePins = (req, res, next) => {
  
  let id = req.params.id
  let promise = model.delPins(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

const addPin = (req, res, next) => {
  const {pinId, boardId} = req.body;
  let promise = relationshipModel.addPin(pinId, boardId);

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })  
}


module.exports = {
    fetchPins,
    findPins,
    createPins,
    updatePins,
    deletePins,
    addPin
};