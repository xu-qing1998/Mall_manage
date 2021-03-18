import request from '@/utils/request'

export function getCategoryList(params) {
    return request({
        url: '/vue-admin-template/product/category',
        method: 'get',
        params
    })
}


export function getcateEdit(params) {
    return request({
        url: '/vue-admin-template/product/category/detail+id',
        method: 'get',
        params
    })
}


export function updateCate(params) {
    return request({
        url: '/vue-admin-template/product/category/edit',
        method: 'post',
        data: params
    })
}


export function addCate(params) {
    return request({
        url: '/vue-admin-template/product/category/add',
        method: 'post',
        data: params
    })
}

export function deleteCate(params) {
    return request({
        url: '/vue-admin-template/product/category/delete+id',
        method: 'get',
        params
    })
}