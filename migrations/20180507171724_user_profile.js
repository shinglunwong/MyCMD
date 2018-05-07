
exports.up = function(knex, Promise) {
    return knex.schema.createTable('exercise_type',(table)=>{
        table.increments();
        table.text("type").notNullable();
        
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('exercise_type');
    
};
