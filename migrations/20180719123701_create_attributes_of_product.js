
exports.up = function(knex, Promise) {
  return knex.schema.createTable('attributes', (table) => {
      table.increments('id');
      table.int('Product_Id').notNull();
      table.string('Attributes');
      table.string('AttributesContent');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('attributes');

};
