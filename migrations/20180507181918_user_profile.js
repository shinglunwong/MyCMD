
// exports.up = function(knex, Promise) {
//     return knex.schema.createTable('user_profile',(table)=>{
//         table.unique().increments();
//         table.integer("weight").notNullable();
//         table.integer("height").notNullable();
//         table.text("gender").notNullable();
//         table.integer('age').notNullable();
//         table.integer('exe_type_key').unsigned();
//         table.foreign('exe_type_key').references('id').inTable('exercise_type');
//         table.integer('muscles_gp_key').unsigned();
//         table.foreign('muscles_gp_key').references('id').inTable('muscles_gp');
        
//       });
// };

// exports.down = function(knex, Promise) {
//     return knex.schema.dropTable('user_profile');
    
// };

exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_profile',(table)=>{
        table.increments();
        table.text('email').notNullable();
        table.text('password').notNullable();
        table.integer("weight").notNullable();
        table.integer("height").notNullable();
        table.text("gender").notNullable();
        table.integer('age').notNullable();
      table.integer('exercise_type_key').unsigned();
      table.foreign('exercise_type_key').references('id').inTable('exercise_type');
      table.integer('muscles_gp_key').unsigned();
      table.foreign('muscles_gp_key').references('id').inTable('muscles_gp');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_profile');
  };