import Request from '../util/request'

// 获取所有的分类
export function GetCategorie() {
    return Request.request({
        method: "get",
        url: "/category/all",
    })
}

// 根据ID获取分类信息
export function GetCategorieInfoByID(data) {
    return Request.request({
        method: "get",
        url: "/category/get",
        data
    })
}






