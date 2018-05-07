exports.up = function(knex, Promise) {
    return knex.schema.createTable('met',(table)=>{
        table.increments();
        table.integer("number");
        table.text('calories');
        
        
       
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('met');
  };