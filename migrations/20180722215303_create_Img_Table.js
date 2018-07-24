
exports.up = function(knex, Promise) {
    return knex.schema.createTable('Img', (table) => {
        table.increments('id');
        table.integer('product_id');
        table.integer('attributes_id');
        table.string('url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('Img');

};
