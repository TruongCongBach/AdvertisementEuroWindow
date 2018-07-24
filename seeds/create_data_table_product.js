
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product').del()
    .then(function () {
      // Inserts seed entries
      return knex('product').insert([
        {id: 1, Product_Name: 'Cửa uPVC'},
        {id: 2, Product_Name: 'Cửa, Vách nhôm'},
        {id: 3, Product_Name: 'Cửa Gỗ'},
        {id: 4, Product_Name: 'Cửa chống cháy'},
        {id: 5, Product_Name: 'Cửa quấn, Cửa tự động'},
        {id: 6, Product_Name: 'Sản phâm kính'},

      ]);
    });
};
