import request from '@/utils/request'

export function getProductList(params) {
    return request({
        url: '/vue-admin-template/product/list',
        method: 'get',
        params
    })
}


export function getProductDetail(params) {
    return request({
        url: '/vue-admin-template/product/detail+id',
        method: 'get',
        params
    })
}

export function updateProduct(params) {
    return request({
        url: '/vue-admin-template/product/edit/',
        method: 'post',
        data: params
    })
}

export function deleteProduct(params) {
    return request({
        url: '/vue-admin-template/product/delete/',
        method: 'get',
        params
    })
}



export function addProduct(params) {
    return request({
        url: '/vue-admin-template/product/new/',
        method: 'post',
        data: params
    })
}