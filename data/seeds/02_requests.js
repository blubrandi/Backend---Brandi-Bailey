
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('requests').del()
    .then(function () {
      // Inserts seed entries
      return knex('requests').insert([
        {
          request_title: 'Soup and sandwiches, pasta, and salad.',
          request_desc: 'Extra tomato soup, vegetable beef soup.  Various sandwiches.  Extra fettucini/alfredo and spaghetti',
          volunteer_assigned: '',
          business_requesting: 2,
          completed: false,
          request_expires_date: '2019-05-21',
          request_expires_time: '19:45:00'
        },
        {
          request_title: 'BBQ Ribs',
          request_desc: 'Leftover BBQ Ribs from lunch',
          volunteer_assigned: 1,
          business_requesting: 1,
          completed: false,
          request_expires_date: '2019-05-21',
          request_expires_time: '18:00:00'
        },
        {
          request_title: 'A lot of stuff from dinner service',
          request_desc: 'different ingredients and stuff from dinner',
          volunteer_assigned: 2,
          business_requesting: 3,
          completed: true,
          request_expires_date: '2019-05-21',
          request_expires_time: '22:30:00'
        },
      ]);
    });
};
