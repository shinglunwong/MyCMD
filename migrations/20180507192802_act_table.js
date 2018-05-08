

exports.up = function(knex, Promise) {
    return knex.schema.createTable('activities',(table)=>{
        table.increments();
        table.integer("name");
        table.integer("met_key").unsigned();;
        table.foreign('met_key').references('met.id');
        table.integer("exercise_type_key").unsigned();
        table.foreign('exercise_type_key').references('id').inTable('exercise_type');
        
       
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('activities');
  };