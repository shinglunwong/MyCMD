// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'MyCMD',
      user:     'shawn_admin',
      password: 'a123456'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'MyCMD',
      user:     'shawn_admin',
      password: 'a123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
