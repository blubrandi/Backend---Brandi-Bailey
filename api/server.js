const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const Volunteers = require('../volunteers/volunteers-model.js')
// const Businesses = require('../businesses/businesses-model.js')
// const Requests = require('../requests/requests-model.js')


const server = express()
server.use(cors())
server.use(helmet())
server.use(express.json())


server.get('/', (req, res) => {
    res.send(
        `<h1>We're up and running, woot!</h1>`
    )
})

server.get('/volunteers', (req, res) => {

    Volunteers.find()
        .then(volunteers => {
            res.status(200).json(volunteers)
        })
        .catch(err => console.log(err))
})

module.exports = server