const UserController = require('./controllers/UserController')
module.exports = (que1) => {
 que1.post('/que1',
 UserController.create
 )

}