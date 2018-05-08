
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('muscles_gp').del()
    .then(function () {
      // Inserts seed entries
      return knex('muscles_gp').insert([
        {id:1, group: 'abs'},
        {id:2, group: 'bicep'},
        {id:3, group: 'tricep'}
      ]);
    });
};
