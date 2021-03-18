import request from '@/utils/request'

export function getBrandList(params) {
    return request({
        url: '/vue-admin-template/product/brand',
        method: 'get',
        params
    })
}

export function searchBrand(params) {
    return request({
        url: '/vue-admin-template/product/search+name',
        method: 'get',
        params
    })
}