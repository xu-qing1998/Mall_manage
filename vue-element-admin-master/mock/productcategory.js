import Mock from 'mockjs'

const data = {
    items: [{
            id: 1,
            parent_id: 0,
            name: '服装',
            level: 0,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 1,
            keywords: '服装',
            desc: '服装分类'
        }, {
            id: 2,
            parent_id: 0,
            name: '手机数码',
            level: 0,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 1,
            keywords: '手机数码',
            desc: '手机数码'
        }, {
            id: 3,
            parent_id: 0,
            name: '家用电器',
            level: 0,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 1,
            keywords: '家用电器',
            desc: '家用电器'
        }, {
            id: 4,
            parent_id: 0,
            name: '家具家装',
            level: 0,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 1,
            keywords: '家具家装',
            desc: '家具家装'

        }, {
            id: 5,
            parent_id: 0,
            name: '汽车用品',
            level: 0,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 1,
            keywords: '汽车用品',
            desc: '汽车用品'
        }, {
            id: 7,
            parent_id: 1,
            name: '外套',
            level: 1,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 0,
            keywords: '外套',
            desc: '服装分类'
        }, {
            id: 8,
            parent_id: 1,
            name: 'T恤',
            level: 1,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 0,
            keywords: 'T恤',
            desc: '服装分类'
        }, {
            id: 9,
            parent_id: 1,
            name: '休闲裤',
            level: 1,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 0,
            keywords: '休闲裤',
            desc: '服装分类'
        }, {
            id: 10,
            parent_id: 1,
            name: '牛仔裤',
            level: 1,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 0,
            keywords: '牛仔裤',
            desc: '服装分类'
        }, {
            id: 11,
            parent_id: 1,
            name: '衬衫',
            level: 1,
            product_count: 100,
            product_unit: '件',
            nav_status: 1,
            show_satus: 1,
            sort: 0,
            keywords: '衬衫',
            desc: '服装分类'
        }, {
            id: 13,
            parent_id: 12,
            name: '家用电子分类1',
            level: 1,
            product_count: 1,
            product_unit: 'string',
            nav_status: 0,
            show_satus: 1,
            sort: 0,
            keywords: '家用电器',
            desc: '家用电器'
        }, {
            id: 14,
            parent_id: 12,
            name: '家用电子分类2',
            level: 1,
            product_count: 1,
            product_unit: 'string',
            nav_status: 0,
            show_satus: 1,
            sort: 0,
            keywords: '家用电器',
            desc: '家用电器'
        }, {
            id: 19,
            parent_id: 2,
            name: '手机通讯',
            level: 1,
            product_count: 0,
            product_unit: '件',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '手机通讯',
            desc: '手机通讯'
        }, {
            id: 29,
            parent_id: 1,
            name: '男鞋',
            level: 1,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '男鞋',
            desc: '男鞋'
        }, {
            id: 30,
            parent_id: 2,
            name: '手机配件',
            level: 1,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '手机配件',
            desc: '手机配件'
        }, {
            id: 31,
            parent_id: 2,
            name: '摄影摄像',
            level: 1,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '摄影摄像',
            desc: '摄影摄像'
        }, {
            id: 32,
            parent_id: 2,
            name: '影音娱乐',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '影音娱乐',
            desc: '影音娱乐'
        }, {
            id: 33,
            parent_id: 2,
            name: '数码配件',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '数码配件',
            desc: '数码配件'
        }, {
            id: 34,
            parent_id: 2,
            name: '智能设备',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '智能设备',
            desc: '智能设备'
        }, {
            id: 35,
            parent_id: 3,
            name: '电视',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '电视',
            desc: '电视'
        }, {
            id: 36,
            parent_id: 3,
            name: '空调',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '空调',
            desc: '空调'
        }, {
            id: 37,
            parent_id: 3,
            name: '洗衣机',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '家用电器',
            desc: '家用电器'
        }, {
            id: 38,
            parent_id: 3,
            name: '冰箱',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '冰箱',
            desc: '冰箱'
        }, {
            id: 39,
            parent_id: 3,
            name: '厨卫大电',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '厨卫大电',
            desc: '厨卫大电'
        }, {
            id: 40,
            parent_id: 3,
            name: '厨房小电',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '厨房小电',
            desc: '厨房小电'
        }, {
            id: 41,
            parent_id: 3,
            name: '生活电器',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '生活电器',
            desc: '生活电器'
        }, {
            id: 42,
            parent_id: 3,
            name: '个护健康',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '个护健康',
            desc: '个护健康'
        }, {
            id: 43,
            parent_id: 4,
            name: '厨房卫浴',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '厨房卫浴',
            desc: '厨房卫浴'
        }, {
            id: 44,
            parent_id: 4,
            name: '灯饰照明',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '灯饰照明',
            desc: '灯饰照明'
        }, {
            id: 45,
            parent_id: 4,
            name: '五金工具',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '五金工具',
            desc: '五金工具'
        }, {
            id: 46,
            parent_id: 4,
            name: '卧室家具',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '卧室家具',
            desc: '卧室家具'
        }, {
            id: 47,
            parent_id: 4,
            name: '客厅家具',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '客厅家具',
            desc: '客厅家具'
        }, {
            id: 48,
            parent_id: 5,
            name: '全新整车',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '全新整车',
            desc: '全新整车'
        }, {
            id: 49,
            parent_id: 5,
            name: '车载电器',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '车载电器',
            desc: '车载电器'
        }, {
            id: 50,
            parent_id: 5,
            name: '维修保养',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '维修保养',
            desc: '维修保养'
        }, {
            id: 51,
            parent_id: 5,
            name: '汽车装饰',
            level: 2,
            product_count: 0,
            product_unit: '',
            nav_status: 0,
            show_satus: 0,
            sort: 0,
            keywords: '汽车装饰',
            desc: '汽车装饰'
        },



    ]
};

export default [{
        url: '/vue-admin-template/product/category/detail',
        type: 'get',
        response: config => {
            const items = data.items;
            const id = config.query.id;
            var product = items.find((item) => {
                if (item.id == id) {
                    return item
                }
            })
            return {
                code: 20000,
                data: {
                    items: product
                }
            }
        }
    },
    {
        url: '/vue-admin-template/product/category/delete',
        type: 'get',
        response: config => {
            const id = config.query.id;
            console.log(id);
            const items = data.items;
            var index = items.findIndex((item) => {
                if (item.id == id) {
                    return true;
                }
            })
            data.items.splice(index, 1);
            return {
                code: 20000,
                data: {
                    message: "删除成功"
                }
            }
        }

    },


    {
        url: '/vue-admin-template/product/category',
        type: 'get',
        response: config => {
            const items = data.items;
            const { page = 1, limit = 5 } = config.query
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items.slice((page - 1) * limit, limit * page)
                }
            }
        }

    },

    {
        url: '/vue-admin-template/product/category/edit',
        type: 'post',
        response: config => {
            const items = data.items;
            const listOne = config.body;
            var product = items.map((item) => {
                if (item.id == listOne.id) {
                    return listOne;
                } else {
                    return item;
                }

            })
            data.items = product;
            return {
                code: 20000,
                data: {
                    message: "修改成功"
                }
            }
        }

    },
    {
        url: '/vue-admin-template/product/category/add',
        type: 'post',
        response: config => {
            const listOne = config.body;
            listOne.id = data.items[data.items.length - 1].id + 1;
            console.log(listOne);
            data.items.push(listOne);
            return {
                code: 20000,
                data: {
                    message: "添加成功"
                }
            }
        }

    },


]