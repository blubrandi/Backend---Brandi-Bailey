
const router = require('express').Router()

const Requests = require('../requests/requests-model.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, (req, res) => {
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

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const { request_title, request_desc, volunteer_assigned, completed, request_expires_date, request_expires_time } = req.body
    Requests.update(id, { request_title, request_desc, volunteer_assigned, completed, request_expires_date, request_expires_time })
        .then(request => {
            res.json(request);
        })
        .catch(error => {
            res.status(500).json({ error: error, message: "Cannot update request" });
        });
});

module.exports = router