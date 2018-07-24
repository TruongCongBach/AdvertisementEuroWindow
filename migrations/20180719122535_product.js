
exports.up = function (knex, Promise) {
    return knex.schema.createTable('Product', function (table) {
        table.increments('id');
        table.string('product_name');
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('Product');
};
