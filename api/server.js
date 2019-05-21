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

//Volunteer Endpoints

// server.get('/volunteers', (req, res) => {

//     Volunteers.find()
//         .then(volunteers => {
//             res.status(200).json(volunteers)
//         })
//         .catch(err => console.log(err))
// })

// server.get('/volunteers/:id', (req, res) => {

//     Volunteers.findById(req.params.id)
//         .then(volunteer => {
//             res.status(200).json(volunteer)
//         })
//         .catch(err => console.log(err))
// })

// server.post('/volunteers', (req, res) => {
//     const { volunteer_username, volunteer_password, volunteer_name, volunteer_email, volunteer_phone } = req.body

//     Volunteers.add({ volunteer_username, volunteer_password, volunteer_name, volunteer_email, volunteer_phone })
//         .then(volunteer => {
//             res.status(201).json(volunteer)
//         })
//         .catch(err =>
//             res.status(500).json(err))
// })

server.use('/users', usersRouter)
server.use('/requests', requestsRouter)

module.exports = server