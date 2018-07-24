
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ContentAttributes', (table) => {
        table.increments('id');
        table.integer('attributes_id');
        table.integer('product_id');
        table.string('title');
        table.string('content');
        table.string('img');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ContentAttributes');
};
