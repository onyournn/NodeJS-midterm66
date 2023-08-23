const UserController = require('./controllers/UserController')
module.exports = (que1) => {
 /* RESFUL Api for users management */
 // create user
 que1.post('/user',
 UserController.create
 )

}