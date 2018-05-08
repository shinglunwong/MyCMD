
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercise_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_type').insert([
        {type: 'aerobic'},
        {type: 'endurance'},
      
      ]);
    });
};
