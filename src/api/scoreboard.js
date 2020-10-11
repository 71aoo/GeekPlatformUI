import Request from '../util/request'

export function getUserBoard(){
    return Request.request({
        method: "get",
        url: "/scoreboard/user",
    })
}

export function getTeamBoard(){
    return Request.request({
        method: "get",
        url: "/scoreboard/team",
    })
}