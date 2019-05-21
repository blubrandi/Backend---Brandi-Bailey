const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const usersRouter = require('../users/users-router.js')
const requestsRouter = require('../requests/requests-router.js')


const server = express()
server.use(cors())
server.use(helmet())
server.use(express.json())


server.get('/', (req, res) => {
    res.send(
        `<h1>We're up and running, woot!</h1>`
    )
})


server.use('/users', usersRouter)
server.use('/requests', requestsRouter)

module.exports = server