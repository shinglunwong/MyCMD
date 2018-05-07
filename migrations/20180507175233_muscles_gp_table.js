
exports.up = function(knex, Promise) {
    return knex.schema.createTable('muscles_gp',(table)=>{
        table.increments();
        table.text("group");
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('muscles_gp');
    
};