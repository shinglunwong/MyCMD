exports.up = function(knex, Promise) {
    return knex.schema.createTable('exercise_table',(table)=>{
        table.increments();
        table.text('name')
        table.text('description');
        table.integer('met_key').unsigned();
        table.foreign('met_key').references('id').inTable('met');
        table.integer('exercise_type_key').unsigned();
        table.foreign('exercise_type_key').references('id').inTable('exercise_type');
        table.integer('muscles_gp_key').unsigned();
        table.foreign('muscles_gp_key').references('id').inTable('muscles_gp');
  
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('exercise_table');
  };