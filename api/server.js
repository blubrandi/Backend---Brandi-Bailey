const express = require('express')

const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(
        `<h1>We're up and running, woot!</h1>`
    )
})

module.exports = server