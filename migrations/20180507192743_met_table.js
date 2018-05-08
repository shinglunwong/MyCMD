exports.up = function(knex, Promise) {
    return knex.schema.createTable('met',(table)=>{
        table.increments();
        table.decimal("number");
        table.integer('calories');
        
        
       
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('met');
  };