const usersQuery = require('../queries/user_query')

const fetchUsers = () => {
  console.log('Hey!!!! I am model')
  // let users = usersQuery.fetchUsers()

  // return users.then(result => {
  //   return result.length < 1
  //     ? { error: 'error retrieving users', status: 404 }
  //     : result
  // })
}
module.exports = {
    fetchUsers
    // findUser,
    // createUser
  }