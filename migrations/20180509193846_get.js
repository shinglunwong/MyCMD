exports.up = function(knex, Promise) {
    return knex.schema.createTable('get',(table)=>{
        table.increments();
        table.timestamp('created_time').defaultTo(knex.fn.now());
        table.decimal('record');
        table.integer('user_idkey').unsigned();
        table.foreign('user_idkey').references('id').inTable('user_profile');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('get');
  };