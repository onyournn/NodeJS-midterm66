const UserController = require('./controllers/UserController')
module.exports = (app) => {
 /* RESFUL Api for users management */
 // create user
 app.post('/user',
 UserController.create
 )

}