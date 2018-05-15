
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('get').del()
    .then(function () {
      // Inserts seed entries
      return knex('get').insert([
        {id: 1, date: '2018-04-16', record:'1708',user_idkey:'1'},
        {id: 2, date: '2018-04-17', record:'1298',user_idkey:'1'},
        {id: 3, date: '2018-04-18', record:'1350',user_idkey:'1'},
        {id: 4, date: '2018-04-19', record:'1800',user_idkey:'1'},
        {id: 5, date: '2018-04-20', record:'2000',user_idkey:'1'},
        {id: 6, date: '2018-04-21', record:'1200',user_idkey:'1'},
        {id: 7, date: '2018-04-22', record:'1100',user_idkey:'1'},
        {id: 8, date: '2018-04-23', record:'1440',user_idkey:'1'},
        {id: 9, date: '2018-04-24', record:'1600',user_idkey:'1'},
        {id: 10, date: '2018-04-25', record:'800',user_idkey:'1'},
        {id: 11, date: '2018-04-26', record:'1250',user_idkey:'1'},
        {id: 12, date: '2018-04-27', record:'1450',user_idkey:'1'},
        {id: 13, date: '2018-04-28', record:'1333',user_idkey:'1'},
        {id: 14, date: '2018-04-29', record:'2999',user_idkey:'1'},
        {id: 15, date: '2018-04-30', record:'2222',user_idkey:'1'},
        {id: 16, date: '2018-05-01', record:'2555',user_idkey:'1'},
        {id: 17, date: '2018-05-02', record:'1777',user_idkey:'1'},
        {id: 18, date: '2018-05-03', record:'2689',user_idkey:'1'},
        {id: 19, date: '2018-05-04', record:'1444',user_idkey:'1'},
        {id: 20, date: '2018-05-05', record:'2120',user_idkey:'1'},
        {id: 21, date: '2018-05-06', record:'2120',user_idkey:'1'},
        {id: 22, date: '2018-05-07', record:'1220',user_idkey:'1'},
        {id: 23, date: '2018-05-08', record:'2520',user_idkey:'1'},
        {id: 24, date: '2018-05-09', record:'1520',user_idkey:'1'},
        {id: 25, date: '2018-05-10', record:'2420',user_idkey:'1'},
        {id: 26, date: '2018-05-11', record:'1620',user_idkey:'1'},
        {id: 27, date: '2018-05-12', record:'1620',user_idkey:'1'},
        {id: 28, date: '2018-05-13', record:'1520',user_idkey:'1'},
        {id: 30, date: '2018-05-14', record:'1120',user_idkey:'1'},
        {id: 31, date: '2018-05-15', record:'2720',user_idkey:'1'},

      ]);
    });
};
