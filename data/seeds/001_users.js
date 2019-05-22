
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    username: 'abqdennys',
                    password: 'test',
                    business_name: 'Dennys',
                    contact_name: 'Penny',
                    address: '123 Adobe Lane NW, Albuquerque, NM 87114',
                    email: 'abq_dennys@test.com',
                    phone: '505-123-4567',
                    user_type: 'business'
                },
                {
                    username: 'chilisabq',
                    password: 'test',
                    business_name: 'Chilis',
                    contact_name: 'Martha',
                    address: '123 Adobe Lane NW, Albuquerque, NM 87114',
                    email: 'abq_chilis@test.com',
                    phone: '505-678-9012',
                    user_type: 'business'
                },
                {
                    username: 'tommyc',
                    password: 'test',
                    business_name: '',
                    contact_name: 'Tommy',
                    address: '',
                    email: 'tommyc@test.com',
                    phone: '505-231-4567',
                    user_type: 'volunteer'
                },
                {
                    username: 'bertha',
                    password: 'test',
                    business_name: '',
                    contact_name: 'Bertha Smertha',
                    address: '123 Adobe Lane NW, Albuquerque, NM 87114',
                    email: 'beeeertha@test.com',
                    phone: '505-221-3333',
                    user_type: 'volunteer'
                },
            ]);
        });
};
