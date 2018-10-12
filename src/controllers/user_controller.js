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
module.exports = {
    fetchUsers
    // findUser,
    // createUser
    // editUser,
    // deleteUser
};