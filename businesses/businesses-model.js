const db = require('../data/dbConfig.js');

module.exports = {
    add,
    remove,
    find,
    findBy,
    findById,
};

function find() {
    return db('replate').select('id', 'business_username', 'business_email', 'business_name', 'business_address', 'business_phone', 'business_contact_person', 'user_type');
}

function findBy(filter) {
    return db('replate').where(filter);
}

function findById(id) {
    return db('replate')
        .where({ id })
        .first();
}

async function add(business) {
    const [id] = await db('replate').insert(business);

    return findById(id);
}

function remove(id) {
    return db('replate')
        .where('id', id)
        .del();
}