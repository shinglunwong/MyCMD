
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('met').del()
    .then(function () {
      // Inserts seed entries
      return knex('met').insert([
        {id: 1, number: '4.4',calories:'222'},
        {id: 2, number: '6.6',calories:'555'},
        {id: 3, number: '8.8',calories:'999'}
      ]);
    });
};
