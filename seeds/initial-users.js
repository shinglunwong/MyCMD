
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_info').insert([
        {id: 1, username: 'bradbrad',email:'brad@mail.com',password:'bradbrad'},
        {id: 2, username: 'parkpak',email:'parker@mail.com',password:'parkpark'},
        {id: 3, username: 'shawshaw',email:'shawn@mail.com',password:'shawnshawn'}
      ]);
    });
};
