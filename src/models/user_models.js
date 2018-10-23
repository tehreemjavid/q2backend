const usersQuery = require('../queries/users_queries')

const fetchUsers = () => {
  console.log('Hey!!!! I am model')
  let users = usersQuery.fetchUsers()

  return users.then(result => {
    return result.length < 1
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}

const findUser = (id) => {
  console.log('Hey!!!! I am model')
  let users = usersQuery.findUser(id)

  return users.then(result => {
    return !result
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}

const createUser = (payload) => {
  // console.log('Hey!!!! I am model')
  let users = usersQuery.createUser(payload)

  return users.then(result => {
    return !result
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}

const updateUser = (payload, id) => { 
  // console.log('Hey!!!! I am model')
  let users = usersQuery.updateUser(payload, id)

  return users.then(result => {
    console.log(result)
    return !result
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}

const delUser = (id) => {
  let users = usersQuery.delUser(id)
  return users.then(result => {
    return !result
      ? { error: 'error retrieving users', status: 404 }
      : result
  })
}

const getUserBoardsById = (id) => {
  let boards = usersQuery.getUserBoardsById(id)
  return boards.then(result => {
    return !result
      ? { error: 'error retrieving boards', status: 404 }
      : result
  })
}


module.exports = {
    fetchUsers,
    findUser,
    createUser,
    updateUser,
    delUser, 
    getUserBoardsById
  }