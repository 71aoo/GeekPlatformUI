import Qs from 'querystringify'

const ISLOGIN = "ISLOGIN"
const USERINFO = "USERINFO"
const TEAMINFO = "TEAMINFO"
const INTEAM = "INTEAM"
const STORAGE = sessionStorage


// 登录标识
export function getIsLogin() {

  return STORAGE.getItem(ISLOGIN)
}

export function setIsLogin(isLogin) {

  return STORAGE.setItem(ISLOGIN, isLogin);
}

export function removeIsLogin(isLogin) {

  return STORAGE.removeItem(ISLOGIN);

}


// 用户信息
export function getUserInfo() {

  return Qs.parse(STORAGE.getItem(USERINFO))
}

export function setUserInfo(userInfo) {

  userInfo = Qs.stringify(userInfo)

  return STORAGE.setItem(USERINFO, userInfo);
}

export function removeUserInfo() {
  return STORAGE.removeItem(USERINFO)
}


// 是否有队伍
export function getInTeam() {
  return STORAGE.getItem(INTEAM)
}

export function setInTeam(inTeam) {
  return STORAGE.setItem(INTEAM, inTeam)
}

export function removeInTeam() {
  return STORAGE.removeItem(INTEAM)
}


// 队伍信息
export function getTeamInfo() {

  return Qs.parse(STORAGE.getItem(TEAMINFO))
}

export function setTeamInfo(teamInfo) {

  teamInfo = Qs.stringify(teamInfo)

  return STORAGE.setItem(TEAMINFO, teamInfo)
}

export function removeTeamInfo() {
  return STORAGE.removeItem(TEAMINFO)
}

