import Request from '../util/request'

// 获取team列表
export function getTeamList() {
    return Request.request({
        method: "get",
        url: "/team/getAll",
    })
}

// 根据id获取team信息
export function getTeamInfo(data) {
    return Request.request({
        method: "get",
        url: "/team/getInfoById?id=" + data,
    })
}

// 加入队伍
export function joinTeam(data) {
    return Request.request({
        method: "post",
        url: "/team/join",
        data
    })
}

// 创建队伍
export function createTeam(data) {
    return Request.request({
        method: "post",
        url: "/team/create",
        data
    })
}

// 获取本队队伍信息
export function getMyTeamInfo() {
    return Request.request({
        method: "get",
        url: "/team/getData",
    })
}