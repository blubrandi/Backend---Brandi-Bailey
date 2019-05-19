const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
    find,
    findBy,
    findById,
};

function find() {
    return db('replate').select('id', 'request_title', 'request_desc', 'volunteer_assigned', 'business_requesting', 'completed', 'request_expires_date', 'request_expires_time');
}

function findBy(filter) {
    return db('replate').where(filter);
}

function findById(id) {
    return db('replate')
        .where({ id })
        .first();
}

async function add(request) {
    const [id] = await db('replate').insert(request);

    return findById(id);
}

function remove(id) {
    return db('replate')
        .where('id', id)
        .del();
}