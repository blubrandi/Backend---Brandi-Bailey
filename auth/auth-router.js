
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const Users = require('../users/users-model.js')
const secrets = require('../config/secrets.js')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 11);
    user.password = hash;


    Users.add(user)
        .then(newUser => {
            const token = generateToken(newUser)
            res.status(200).json(newUser, token)
        })
        .catch(error => {
            res.status(500).json(error);
        });
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            const token = generateToken(user)
            if (user && bcrypt.compareSync(password, user.password)) {
                res.status(200).json({
                    message: `Welcome, ${user.contact_name}!`,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        userType: user.user_type,
    }

    const options = {
        expiresIn: '1h'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)

}


module.exports = router;