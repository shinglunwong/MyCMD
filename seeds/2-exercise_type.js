
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercise_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_type').insert([
        {id:1,type: 'aerobic'},
        {id:2,type: 'endurance'},
      
      ]);
    });
};
