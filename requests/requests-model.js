const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
    find,
    findBy,
    findById,
    update
};


async function find() {
    return db('requests')
}


function findBy(filter) {
    return db('requests')
        .where(filter)
}

function findById(id) {
    return db('requests')
        .where({ id })
        .first();
}

async function add(request) {
    return db('requests')
        .where({ id })
        .insert(request);
}

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