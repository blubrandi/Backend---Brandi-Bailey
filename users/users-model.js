const db = require('../data/dbConfig.js');

module.exports = {
    add,
    update,
    remove,
    find,
    findBy,
    findById,
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

async function add(volunteer) {
    const [id] = await db('users').insert(volunteer);

    return findById(id);
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes, '*');
}

function remove(id) {
    return db('users')
        .where('id', id)
        .del();
}