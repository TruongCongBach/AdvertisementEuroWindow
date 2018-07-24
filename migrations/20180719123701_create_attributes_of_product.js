
exports.up = function(knex, Promise) {
  return knex.schema.createTable('Attributes', (table) => {
      table.increments('id');
      table.integer('product_id');
      table.string('attributes');
      table.integer('attributesContent_id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Attributes');

};
