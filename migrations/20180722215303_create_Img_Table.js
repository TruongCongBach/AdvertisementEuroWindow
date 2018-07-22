
exports.up = function(knex, Promise) {
    return knex.schema.createTable('img', (table) => {
        table.increments('id');
        table.int('Product_Id').notNull();
        table.int('Attributes_Is');
        table.string('Url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('img');

};
