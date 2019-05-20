
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('volunteers').del()
    .then(function () {
      // Inserts seed entries
      return knex('volunteers').insert([
        {
          volunteer_username: 'pennyw',
          volunteer_password: 'test',
          volunteer_name: 'Penny West',
          volunteer_email: 'penny@test.com',
          volunteer_phone: '505-123-4567',
          user_type: 'volunteer'
        },
        {
          volunteer_username: 'marka',
          volunteer_password: 'test',
          volunteer_name: 'Mark Anthony',
          volunteer_email: 'mark@test.com',
          volunteer_phone: '505-234-5678',
          user_type: 'volunteer'
        },
        {
          volunteer_username: 'brandin',
          volunteer_password: 'test',
          volunteer_name: 'Brandi West',
          volunteer_email: 'brandi@test.com',
          volunteer_phone: '505-345-6789',
          user_type: 'volunteer'
        },
      ]);
    });
};
