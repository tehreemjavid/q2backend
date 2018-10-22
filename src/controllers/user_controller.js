const model = require('../models/user_model');

const fetchUsers = (req, res, next) => {
    let promise = model.fetchUsers()

    promise.then(result => {
      return result.error ? next(result) : res.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
}

const findUser = (req, res, next) => {
 let id = req.params.id
  let promise = model.findUser(id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}
//  create 
  const createUser = (req, res, next) => {
  let payload = req.body
  let promise = model.createUser(payload)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// update users
const updateUser = (req, res, next) => {
  let payload = req.body
  let id = req.params.id
  console.log(payload)
  let promise = model.updateUser(payload, id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}

// delete users 
const deleteUser = (req, res, next) => {
  let payload = req.body
  let id = req.params.id
  console.log(payload)
  let promise = model.deleteUser(payload, id)

  promise.then(result => {
    return result.error ? next(result) : res.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
}


module.exports = {
    fetchUsers,
    findUser,
    createUser,
    updateUser,
    deleteUser
};