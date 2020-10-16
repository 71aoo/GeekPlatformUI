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


// 获取队伍已解题目
export function GetTeamSolvedChallenges(data){
    return Request.request({
        method: "get",
        url: "/solve/team/challenge?teamID=" + data,
    
    })
}


// 获取用户已解题目
export function GetUserSolvedChallenges(data){
    return Request.request({
        method: "get",
        url: "/solve/user/challenge?userID=" + data,
    
    })
}

