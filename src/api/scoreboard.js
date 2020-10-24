import Request from '../util/request'

export function getUserBoard(data){
    return Request.request({
        method: "get",
        url: "/scoreboard/user?page=" + data,
    })
}

export function getTeamBoard(data){
    return Request.request({
        method: "get",
        url: "/scoreboard/team?page=" + data,
    })
}