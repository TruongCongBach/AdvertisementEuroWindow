
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attributes', (table) => {
      table.increments('id');
      table.string('Product_Name').notNull();
      //todo create database
  })
};

exports.down = function(knex, Promise) {
  
};
