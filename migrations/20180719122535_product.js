
exports.up = function (knex, Promise) {
    return knex.schema.createTable('product', function (table) {
        table.increments('id');
        table.string('Product_Name').notNull();
        table.dateTime('deleted_at');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('product');
};
