
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_info',(table)=>{
        table.increments();
        table.string("username");
        table.string("email");
        table.string("password")
        table.timestamps(false,true);
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_info');
};
