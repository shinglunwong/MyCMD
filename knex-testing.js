const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);


knex.from('burn')
        .sum('record')
        .innerJoin('user_profile', 'burn.user_idkey', 'user_profile.id')
        .groupBy('date').orderBy('date', 'aesc').then((data)=>{
            console.log(data)
        })

      knex.from('get')
        .sum('record')
        .innerJoin('user_profile', 'get.user_idkey', 'user_profile.id')
        .groupBy('date').orderBy('date', 'aesc').then((data)=>{
       console.log(data)
        }).then()

        
        