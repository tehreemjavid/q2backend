
const model = require('../models/boards_model');

const fetchBoards = (req, res, next) => {
    let promise = model.fetchBoards()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}

const findBoards = (req, res, next) => {
 let id = req.params.id
  let promise = model.findBoards(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
//  create 
  const createBoards = (req, res, next) => {
  let payload = req.body
  let promise = model.createBoards(payload)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// update boards
const updateBoards = (req, res, next) => {
  let payload = req.body
  let id = req.params.id
  console.log(payload)
  let promise = model.updateBoards(payload, id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// delete boards 
const deleteBoards = (req, res, next) => {
  
  let id = req.params.id
  let promise = model.delBoards(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}


module.exports = {
    fetchBoards,
    findBoards,
    createBoards,
    updateBoards,
    deleteBoards
};