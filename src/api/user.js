import Request from '../util/request'


// 登录方法
export function Login(data) {
    return Request.request({
        method: "post",
        url: "/login/",
        data
    })
}

// 注册接口
export function Register(data) {
    return Request.request({
        method: "post",
        url: "/addUser",
        data
    })
}

export function getInfo() {
    return Request.request({
        method: "get",
        url: "/user/getData",
    })
}

export function getAllUser() {
    return Request.request({
        method: "get",
        url: "/user/getAll",
    })
}

// 检测用户名是否重复
export function checkUsername(data) {
    return Request.request({
        method: "post",
        url: "/checkUserName",
        data
    })
}

// 发送验证码
export function sendCode(data) {
    return Request.request({
        method: "post",
        url: "/sendCode",
        data
    })
}

