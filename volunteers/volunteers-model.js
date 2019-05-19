const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
    find,
    findBy,
    findById,
};

function find() {
    return db('replate').select('id', 'volunteer_username', 'volunteer_name', 'volunteer_email', 'volunteer_phone');
}

function findBy(filter) {
    return db('replate').where(filter);
}

function findById(id) {
    return db('replate')
        .where({ id })
        .first();
}

async function add(volunteer) {
    const [id] = await db('replate').insert(volunteer);

    return findById(id);
}

function remove(id) {
    return db('replate')
        .where('id', id)
        .del();
}