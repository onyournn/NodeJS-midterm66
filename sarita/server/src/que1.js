let express = require('express')
let bodyParser = require('body-parser')

const {sequelize} = require('./models')
const config = require('./config/config')


const que1 = express()

que1.use(bodyParser.json())
que1.use(bodyParser.urlencoded({ extended: true }))

require('./routes')(que1)

que1.get('/status', function (req, res) {
    res.send('')
})
