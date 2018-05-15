
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('burn').del()
    .then(function () {
      // Inserts seed entries
      return knex('burn').insert([
        {id: 1, date: '2018-04-16', record:'708',user_idkey:'1'},
        {id: 2, date: '2018-04-17', record:'298',user_idkey:'1'},
        {id: 3, date: '2018-04-18', record:'350',user_idkey:'1'},
        {id: 4, date: '2018-04-19', record:'800',user_idkey:'1'},
        {id: 5, date: '2018-04-20', record:'1000',user_idkey:'1'},
        {id: 6, date: '2018-04-21', record:'200',user_idkey:'1'},
        {id: 7, date: '2018-04-22', record:'100',user_idkey:'1'},
        {id: 8, date: '2018-04-23', record:'440',user_idkey:'1'},
        {id: 9, date: '2018-04-24', record:'600',user_idkey:'1'},
        {id: 10, date: '2018-04-25', record:'0',user_idkey:'1'},
        {id: 11, date: '2018-04-26', record:'250',user_idkey:'1'},
        {id: 12, date: '2018-04-27', record:'450',user_idkey:'1'},
        {id: 13, date: '2018-04-28', record:'333',user_idkey:'1'},
        {id: 14, date: '2018-04-29', record:'999',user_idkey:'1'},
        {id: 15, date: '2018-04-30', record:'222',user_idkey:'1'},
        {id: 16, date: '2018-05-01', record:'555',user_idkey:'1'},
        {id: 17, date: '2018-05-02', record:'777',user_idkey:'1'},
        {id: 18, date: '2018-05-03', record:'689',user_idkey:'1'},
        {id: 19, date: '2018-05-04', record:'444',user_idkey:'1'},
        {id: 20, date: '2018-05-05', record:'120',user_idkey:'1'},
        {id: 21, date: '2018-05-06', record:'120',user_idkey:'1'},
        {id: 22, date: '2018-05-07', record:'220',user_idkey:'1'},
        {id: 23, date: '2018-05-08', record:'520',user_idkey:'1'},
        {id: 24, date: '2018-05-09', record:'520',user_idkey:'1'},
        {id: 25, date: '2018-05-10', record:'420',user_idkey:'1'},
        {id: 26, date: '2018-05-11', record:'620',user_idkey:'1'},
        {id: 27, date: '2018-05-12', record:'620',user_idkey:'1'},
        {id: 28, date: '2018-05-13', record:'520',user_idkey:'1'},
        {id: 30, date: '2018-05-14', record:'1120',user_idkey:'1'},
        {id: 31, date: '2018-05-15', record:'720',user_idkey:'1'},

      ]);
    });
};
