import Request from '../util/request'

export function getAnnouncement(){
    return Request.request({
        method: "get",
        url: "/announce/get",
    })
}