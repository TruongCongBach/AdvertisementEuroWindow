exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('Attributes').del()
        .then(function () {
            // Inserts seed entries
            return knex('Attributes').insert([
                {
                    id                  : 1,
                    product_id          : 1,
                    attributes          : 'Giới thiệu cửa uPVC',
                    attributesContent_id: 1
                },
                {
                    id                  : 2,
                    product_id          : 1,
                    attributes          : 'Chi tiết và tính năng các bộ phận cấu thành',
                    attributesContent_id: 2
                },
                {
                    id                  : 3,
                    product_id          : 1,
                    attributes          : 'Tính ưu việt',
                    attributesContent_id: 3
                },
                {
                    id                  : 4,
                    product_id          : 1,
                    attributes          : 'Cửa sổ mở quay lật vào trong',
                    attributesContent_id: 4
                },
                {
                    id                  : 5,
                    product_id          : 1,
                    attributes          : 'Cửa sổ mở quay vào trong',
                    attributesContent_id: 5
                },
                {
                    id                  : 6,
                    product_id          : 1,
                    attributes          : 'Cửa sổ mở quay ra ngoài',
                    attributesContent_id: 6
                },
                {
                    id                  : 7,
                    product_id          : 1,
                    attributes          : 'Cửa sổ mở trượt',
                    attributesContent_id: 7
                },
                {
                    id                  : 8,
                    product_id          : 1,
                    attributes          : 'Cửa sổ mở hất ra ngoài',
                    attributesContent_id: 8
                },
                {
                    id                  : 9,
                    product_id          : 1,
                    attributes          : 'Cửa sổ mở quay, lật và mở song song',
                    attributesContent_id: 9
                },
                {
                    id                  : 10,
                    product_id          : 1,
                    attributes          : 'Cửa đi ban công và cửa sổ mở quay lật vào trong giấu khung',
                    attributesContent_id: 10
                },
                {
                    id                  : 11,
                    product_id          : 1,
                    attributes          : 'Cửa đi hai cánh mở quay',
                    attributesContent_id: 11
                },
                {
                    id                  : 12,
                    product_id          : 1,
                    attributes          : 'Cửa đi mở trượt',
                    attributesContent_id: 12
                },
                {
                    id                  : 13,
                    product_id          : 1,
                    attributes          : 'Cửa đi Xếp trượt',
                    attributesContent_id: 13
                },
                {
                    id                  : 14,
                    product_id          : 1,
                    attributes          : 'Cửa đi một cánh mở quay, cửa thông phòng',
                    attributesContent_id: 14
                },
                {
                    id                  : 15,
                    product_id          : 1,
                    attributes          : 'Cửa ra ban công, ra loggia',
                    attributesContent_id: 15
                },
                {
                    id                  : 16,
                    product_id          : 1,
                    attributes          : 'Vách ngăn',
                    attributesContent_id: 16
                },

                {
                    id                  : 17,
                    product_id          : 2,
                    attributes          : 'Giới thiệu cửa nhôm Eurowindow K',
                    attributesContent_id: 17
                },
                {
                    id                  : 18,
                    product_id          : 2,
                    attributes          : 'Tính ưu việt',
                    attributesContent_id: 18
                },
                {
                    id                  : 19,
                    product_id          : 2,
                    attributes          : 'Hệ vách nhom kính lớn',
                    attributesContent_id: 19
                },
                {
                    id                  : 20,
                    product_id          : 2,
                    attributes          : 'Mái che',
                    attributesContent_id: 20
                },
                {
                    id                  : 21,
                    product_id          : 2,
                    attributes          : 'Cửa sổ mở quay vào trong',
                    attributesContent_id: 21
                },
                {
                    id                  : 22,
                    product_id          : 2,
                    attributes          : 'Cửa đi mở quay',
                    attributesContent_id: 22
                },
                {
                    id                  : 23,
                    product_id          : 2,
                    attributes          : 'Cửa đi mở trượt',
                    attributesContent_id: 23
                },
                {
                    id                  : 24,
                    product_id          : 2,
                    attributes          : 'Cửa chống đạn',
                    attributesContent_id: 24
                },
                {
                    id                  : 25,
                    product_id          : 2,
                    attributes          : 'Cửa sổ mở quay ra ngoài',
                    attributesContent_id: 25
                },
                {
                    id                  : 26,
                    product_id          : 2,
                    attributes          : 'Cửa nhôm ốp gỗ',
                    attributesContent_id: 26
                },
                {
                    id                  : 27,
                    product_id          : 2,
                    attributes          : 'Cửa nhôm và vách nhôm Technal',
                    attributesContent_id: 27
                },
                {
                    id                  : 28,
                    product_id          : 2,
                    attributes          : 'Cửa nhôm Eurowindow',
                    attributesContent_id: 28
                },

                {
                    id                  : 29,
                    product_id          : 3,
                    attributes          : 'Giới thiệu cửa gỗ Eurowindow',
                    attributesContent_id: 29
                },
                {
                    id                  : 30,
                    product_id          : 3,
                    attributes          : 'Tính ưu việt',
                    attributesContent_id: 30
                },
                {
                    id                  : 31,
                    product_id          : 3,
                    attributes          : 'Mẫu gỗ, khuôn cửa và hệ phụ kiện',
                    attributesContent_id: 31
                },
                {
                    id                  : 32,
                    product_id          : 3,
                    attributes          : 'Cửa gỗ tự nhiên',
                    attributesContent_id: 32
                },
                {
                    id                  : 33,
                    product_id          : 3,
                    attributes          : 'Cửa gỗ tự nhiên ghép thanh',
                    attributesContent_id: 33
                },
                {
                    id                  : 34,
                    product_id          : 3,
                    attributes          : 'Cửa gỗ MDF và HDF',
                    attributesContent_id: 34
                },
                {
                    id                  : 35,
                    product_id          : 3,
                    attributes          : 'Cửa gỗ hỗn hợp',
                    attributesContent_id: 35
                },
                {
                    id                  : 36,
                    product_id          : 3,
                    attributes          : 'Cửa nhôm gỗ',
                    attributesContent_id: 36
                },
                {
                    id                  : 37,
                    product_id          : 3,
                    attributes          : 'Sàn gỗ',
                    attributesContent_id: 37
                },
                {
                    id                  : 38,
                    product_id          : 3,
                    attributes          : 'Đồ gỗ nội thất',
                    attributesContent_id: 38
                },

                {
                    id                  : 39,
                    product_id          : 4,
                    attributes          : 'Giới thiệu cửa chống cháy',
                    attributesContent_id: 39
                },
                {
                    id                  : 40,
                    product_id          : 4,
                    attributes          : 'Chi tiết và tính năng bộ phận cấu thành',
                    attributesContent_id: 40
                },
                {
                    id                  : 41,
                    product_id          : 4,
                    attributes          : 'Tính ưu viêt',
                    attributesContent_id: 41
                },

                {
                    id                  : 42,
                    product_id          : 1,
                    attributes          : 'Giới thiệu cửa cuốn và cửa tự động Eurowindow',
                    attributesContent_id: 42
                },
                {
                    id                  : 43,
                    product_id          : 5,
                    attributes          : 'Ưu điểm của cửa cuốn Eurowindow',
                    attributesContent_id: 43
                },
                {
                    id                  : 44,
                    product_id          : 5,
                    attributes          : 'Cửa cuốn Eurowindow - BUNKA',
                    attributesContent_id: 44
                },
                {
                    id                  : 45,
                    product_id          : 5,
                    attributes          : 'Cấu tạo màn cửa',
                    attributesContent_id: 45
                },
                {
                    id                  : 46,
                    product_id          : 5,
                    attributes          : 'Cửa trượt tự động',
                    attributesContent_id: 46
                },
                {
                    id                  : 47,
                    product_id          : 5,
                    attributes          : 'Cửa trượt tự động 2 cánh',
                    attributesContent_id: 47
                },
                {
                    id                  : 78,
                    product_id          : 5,
                    attributes          : 'Cửa trượt tự động xoay tròn 3 cánh hoặc 4 cánh',
                    attributesContent_id: 48
                },

                {
                    id                  : 49,
                    product_id          : 6,
                    attributes          : 'Giới thiệu sản phẩm kính Eurowindow',
                    attributesContent_id: 49
                },
                {
                    id                  : 50,
                    product_id          : 6,
                    attributes          : 'Kinh an toàn',
                    attributesContent_id: 50
                },
                {
                    id                  : 51,
                    product_id          : 6,
                    attributes          : 'Sản phẩm kính cường lực và bán cường lực',
                    attributesContent_id: 51
                },
                {
                    id                  : 52,
                    product_id          : 6,
                    attributes          : 'Hộp kính & hộp kính khổ lớn',
                    attributesContent_id: 52
                },
                {
                    id                  : 53,
                    product_id          : 6,
                    attributes          : 'Kinh hoa văn',
                    attributesContent_id: 53
                },
                {
                    id                  : 54,
                    product_id          : 6,
                    attributes          : 'Kính cách nhiệt an toàn ACT',
                    attributesContent_id: 54
                }

                // {id: 55, product_id: 1, attributes: '', attributesContent_id: 55},
                // {id: 56, product_id: 1, attributes: '', attributesContent_id: 56},
                // {id: 57, product_id: 1, attributes: '', attributesContent_id: 57},
                // {id: 58, product_id: 1, attributes: '', attributesContent_id: 58},
                // {id: 59, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 60, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 61, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 62, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 63, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 64, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 65, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 66, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 67, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 68, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 69, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 70, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 71, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 72, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 73, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 74, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 75, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 76, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 77, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 78, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 79, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 80, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 81, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 82, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 83, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 84, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 85, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 86, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 87, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 88, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 89, product_id: 1, attributes: '', attributesContent_id: 17},
                // {id: 90, product_id: 1, attributes: '', attributesContent_id: 17},
            ]);
        });
};
