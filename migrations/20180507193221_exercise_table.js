exports.up = function(knex, Promise) {
    return knex.schema.createTable('exercise_table',(table)=>{
        table.increments();
        table.integer("description");
        table.integer("met_key").unsigned();;
        table.foreign('met_key').references('met.id');
        table.integer("exercise_type_key").unsigned();
        table.foreign('exercise_type_key').references('exercise_type.id');
        table.integer('muscles_gp_key').unsigned();
        table.foreign('muscles_gp_key').references('muscles_gp.id');
  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('exercise_table');
  };