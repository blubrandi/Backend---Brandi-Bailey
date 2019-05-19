require('dotenv').config()

const server = require('./api/server.js')

const port = process.env.PORT || 4200
server.listen(port, () => {
    console.log(`Server is running on port ${port}, let's get this y'all!`)
})