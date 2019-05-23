
const router = require('express').Router()

const Requests = require('../requests/requests-model.js')
const Users = require('../users/users-model.js')
const restricted = require('../auth/restricted.js')

router.get('/', restricted, async (req, res) => {
    const requests = []

    try {
        const lists = await Requests.find()
        for (i = 0; i < lists.length; i++) {
            let r = lists[i]
            r.business_requesting = await Users.findBusinessByID(lists[i].business_requesting)
            r.volunteer_assigned = await Users.findVolunteerByID(lists[i].volunteer_assigned)
            requests.push(r)
        }
        res.status(200).json(requests)
    } catch (err) {
        res.send(err)
    }
})

router.get('/:id', restricted, async (req, res) => {

    try {
        const request = await Requests.findById(req.params.id)
        request.business_requesting = await Users.findBusinessByID(request.business_requesting)
        request.volunteer_assigned = await Users.findVolunteerByID(request.volunteer_assigned)
        res.status(200).json(request)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', restricted, (req, res) => {

    Requests.add(req.body)
        .then(request => {
            res.json(request)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'Cannot add request' })
        })
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params
    const updated = req.body
    Requests.update(id, updated)
        .then(request => {
            res.json(request)
        })
        .catch(error => {
            res.status(500).json({ error: error, message: 'Cannot update request' })
        })
})

router.delete('/:id', restricted, (req, res) => {
    Requests.remove(req.params.id)
        .then(request => {
            res.status(200).json({ message: 'Request has been deleted' })
        })
        .catch(error => {
            res.status(500).json({ error, message: 'Error deleting request.' })
        })
})

module.exports = router