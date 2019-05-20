
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('businesses').del()
    .then(function () {
      // Inserts seed entries
      return knex('businesses').insert([
        {
          business_username: 'abqdennys',
          business_password: 'test',
          business_email: 'abq_dennys@test.com',
          business_name: 'Dennys',
          business_address: '123 Adobe Lane NW, Albuquerque, NM 87114',
          business_phone: '575-123-4567',
          business_contact_person: 'Robert',
          user_type: 'business'
        },
        {
          business_username: 'cheddars',
          business_password: 'test',
          business_email: 'kitchenmanager@test.com',
          business_name: 'Cheddars',
          business_address: '604 Adobe Lane NW, Albuquerque, NM 87114',
          business_phone: '575-234-5678',
          business_contact_person: 'Taylor',
          user_type: 'business'
        },
        {
          business_username: 'thecooperage',
          business_password: 'test',
          business_email: '',
          business_name: 'The Cooperage',
          business_address: '4520 Adobe Lane NW, Albuquerque, NM 87114',
          business_phone: '575-345-6789',
          business_contact_person: 'RT',
          user_type: 'business'
        },

      ]);
    });
};
