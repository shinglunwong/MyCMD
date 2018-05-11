require('dotenv').config();
const knex = require('knex')({
    // Config containing the information of the database connection.
    client: 'postgresql',
    connection: {
        database: process.env.DB_NAME,
        user:     process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
});

 knex('activity').insert([
          {id: 11, name: 'basketballs',MET:'6.5'},
        ]).then();
      
  // .thn() => sql (;)