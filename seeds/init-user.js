
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_profile').insert([
        {id:1, weight: '100',height:'180',gender:'M',age:'30',exercise_type_key:'1',muscles_gp_key:'2'},
      ]);
    });
};
