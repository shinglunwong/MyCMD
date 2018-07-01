
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      // Inserts seed entries
      return knex('activity').insert([
        {id: 1, name: 'Basketball',MET:'6.5'},
        {id: 2, name: 'Golf',MET:'4.8'},
        {id: 3, name: 'Rugby',MET:'8.3'},
        {id: 4, name: 'Hockey',MET:'7.8'},
        {id: 5, name: 'Soccer',MET:'10'},
        {id: 6, name: 'Dancing',MET:'7.8'},
        {id: 7, name: 'Tennis',MET:'7.3'},
        {id: 8, name: 'Volleyball',MET:'4.5'},
        {id: 9, name: 'Squash',MET:'12'},
        {id: 10, name: 'Boxing',MET:'7.8'},
        {id: 11, name: 'Cycling',MET:'7'},
        {id: 12, name: 'Running',MET:'9'},
        {id: 13, name: 'Swimming',MET:'7'},
        {id: 14, name: 'HIIT',MET:'9'},

      ]);
    });
};
