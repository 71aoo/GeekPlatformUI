import Request from '../util/request'


// 获取分类下所有题目
export function getChallengesByCategory(data) {
    return Request.request({
        method: "get",
        url: "/challenge/category?categoryID=" + data,
    })
}


// 根据ID获取题目信息
export function getChallengeInfoByID(data) {
    return Request.request({
        method: "get",
        url: "/challenge/info",
        data
    })
}


// 提交 flag
// String flag, String token, int teamID, int userID, int challengeID
export function SubmitFlag(data) {
    return Request.request({
        method: "post",
        url: "/solve/checkFlag",
        data
    })
}

