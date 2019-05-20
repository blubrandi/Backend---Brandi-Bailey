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
    return db('volunteers').select('id', 'volunteer_username', 'volunteer_name', 'volunteer_email', 'volunteer_phone');
}

function findBy(filter) {
    return db('volunteers').where(filter);
}

function findById(id) {
    return db('volunteers')
        .where({ id })
        .first();
}

async function add(volunteer) {
    const [id] = await db('volunteers').insert(volunteer);

    return findById(id);
}

function update(id, changes) {
    return db('volunteers')
        .where({ id })
        .update(changes, '*');
}

function remove(id) {
    return db('volunteers')
        .where('id', id)
        .del();
}