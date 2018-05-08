
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('muscles_gp').del()
    .then(function () {
      // Inserts seed entries
      return knex('muscles_gp').insert([
        {group: 'abs'},
        {group: 'bicep'},
        {group: 'tricep'}
      ]);
    });
};
