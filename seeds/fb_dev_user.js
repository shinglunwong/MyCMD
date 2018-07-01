
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fb_user_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('fb_user_table').insert([
        { id:1,userId: '10216963395417207'},
        {id:2,userId:'1897375973893126'}
      ]);
    });
};
