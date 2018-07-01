
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fb_workout',(table)=>{
        table.increments();
        table.text('name').notNullable();
        table.decimal('weight').notNullable();
        table.integer('rep').notNullable();
        table.integer('set').notNullable();
        table.integer('user_id').notNullable();
        table.timestamps(false,true); 
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('fb_workout');

};
