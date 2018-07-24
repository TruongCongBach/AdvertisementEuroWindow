exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('ContentAttributes').del()
        .then(function () {
            // Inserts seed entries
            return knex('ContentAttributes').insert([
                {
                    id           : 1,
                    attributes_id: 1,
                    product_id   : 1,
                    title        : 'Dac diem',
                    content      : '',
                    img          : 'http://www.eurowind.biz/thumbnail/EW-256-2016-10-6/partner-1.jpg'
                },

            ]);
        });
};
