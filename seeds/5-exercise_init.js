
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercise_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise_table').insert([
        {id: 1, name: 'squat',description:'Bodyweight squat – done with no weight or barbell, often at higher repetitions than other variants.',exercise_type_key:1,met_key:2,muscles_gp_key:3},
        
      ]);
    });
};
