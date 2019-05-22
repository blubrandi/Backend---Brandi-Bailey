const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    find,
    findBy,
    findById,
    findBusinessByID,
    findVolunteerByID
};

function find() {
    return db('users').select('id', 'username', 'password', 'business_name', 'contact_name', 'email', 'phone', 'address', 'user_type');
}

function findBy(filter) {
    return db('users').where(filter);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function findBusinessByID(id) {
    return db('users')
        .where({ id }).select('business_name', 'address', 'phone', 'contact_name', 'email')
        .first()
}

function findVolunteerByID(id) {
    return db('users')
        .where({ id }).select('contact_name', 'phone')
        .first()
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}