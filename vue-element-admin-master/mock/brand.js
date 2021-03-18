import Mock from 'mockjs'

const data = {
    items: [{
            id: 1,
            name: '万和',
            first_letter: 'W',
            sort: 0,
            factory_status: 1,
            show_status: 1,
            product_count: 100,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg(5).jpg',
        },
        {
            id: 2,
            name: '三星',
            first_letter: 'S',
            sort: 100,
            factory_status: 1,
            show_status: 1,
            product_count: 100,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg (1).jpg',
        }, {
            id: 3,
            name: '华为',
            first_letter: 'H',
            sort: 100,
            factory_status: 1,
            show_status: 0,
            product_count: 100,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg (2).jpg',
        }, {
            id: 4,
            name: '格力',
            first_letter: 'G',
            sort: 30,
            factory_status: 1,
            show_status: 0,
            product_count: 100,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg (3).jpg',
        }, {
            id: 5,
            name: '方太',
            first_letter: 'F',
            sort: 20,
            factory_status: 1,
            show_status: 0,
            product_count: 100,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg (4).jpg',
        }, {
            id: 6,
            name: '小米',
            first_letter: 'M',
            sort: 500,
            factory_status: 1,
            show_status: 1,
            product_count: 100,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180518/5a912944N474afb7a.png',
        }, {
            id: 21,
            name: 'OPPO',
            first_letter: 'O',
            sort: 0,
            factory_status: 1,
            show_status: 1,
            product_count: 88,
            product_comment_count: 500,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg(6).jpg',
        }, {
            id: 49,
            name: '七匹狼',
            first_letter: 'S',
            sort: 200,
            factory_status: 1,
            show_status: 1,
            product_count: 77,
            product_comment_count: 400,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180518/1522738681.jpg',
        }, {
            id: 50,
            name: '海澜之家',
            first_letter: 'H',
            sort: 200,
            factory_status: 1,
            show_status: 1,
            product_count: 66,
            product_comment_count: 300,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/LOGO1024.png',
        }, {
            id: 51,
            name: '苹果',
            first_letter: 'A',
            sort: 200,
            factory_status: 1,
            show_status: 1,
            product_count: 55,
            product_comment_count: 200,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180607/timg.jpg',
        }, {
            id: 58,
            name: 'NIKE',
            first_letter: 'N',
            sort: 0,
            factory_status: 1,
            show_status: 1,
            product_count: 33,
            product_comment_count: 100,
            logo: 'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20180615/timg (51).jpg',
        },


    ]
}

export default [{
        url: '/vue-admin-template/product/brand',
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
        url: '/vue-admin-template/product/search',
        type: 'get',
        response: config => {
            const items = data.items;
            const name = config.query.name;
            console.log(name);
            var brand = items.filter((item) => {
                if (item.name.includes(name)) {
                    return item
                }
            })
            return {
                code: 20000,
                data: {
                    items: brand
                }
            }
        }

    }
]