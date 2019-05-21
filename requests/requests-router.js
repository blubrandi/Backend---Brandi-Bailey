
const router = require('express').Router()

const Requests = require('../requests/requests-model.js')
const restricted = require('../auth/restricted.js')

router.get('/requests', restricted, (req, res) => {
    Requests.find()
        .then(requests => {
            res.json(requests);
        })
        .catch(err => res.send(err))
});

router.get('/:id', restricted, (req, res) => {
    Requests.findById(req.params.id)
        .then(requests => {
            res.json(requests)
        })
        .catch(err => res.send(err))
});

module.exports = router