
const router = require('express').Router()

const Volunteers = require('../volunteers/volunteers-model.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(volunteers => {
            res.json(volunteers);
        })
        .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
    Users.findById(req.params.id)
        .then(volunteers => {
            res.json(volunteers);
        })
        .catch(err => res.send(err))
});

module.exports = router