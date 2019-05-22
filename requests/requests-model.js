const db = require('../data/dbConfig.js');

module.exports = {
    // add,
    remove,
    find,
    findBy,
    findById,
    update
};

function find() {
    return db('requests').select('id', 'request_title', 'request_desc', 'volunteer_assigned', 'business_requesting', 'completed', 'request_expires_date', 'request_expires_time');
}

function findBy(filter) {
    return db('requests').where(filter);
}

function findById(id) {
    return db('requests')
        .where({ id })
        .first();
}

// async function add(request) {
//     const { id } = await db('requests').insert(request);

//     return findById(id);
// }

function update(id, changes) {
    return db('requests')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('requests')
        .where('id', id)
        .del();
}