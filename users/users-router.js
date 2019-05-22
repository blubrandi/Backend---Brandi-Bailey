const router = require('express').Router()

const Users = require('../users/users-model.js')
const restricted = require('../auth/restricted.js')

router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err))
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { username, password, business_name, contact_name, email, phone, address, user_type } = req.body
    Users.update(id, { username, password, business_name, contact_name, address, user_type })
        .then(user => {
            res.json(user)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'Cannot update user' })
        });
})

router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
        .then(user => {
            res.status(200).json({ message: 'User has been deleted' })
        })
        .catch(error => {
            res.status(500).json({ error, message: 'Error deleting user.' })
        })
})

module.exports = router