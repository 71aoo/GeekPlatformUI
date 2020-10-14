import axios from "axios";
import Vue from "vue"
import Router from "../router/index"
import { Message } from "element-ui";
import Qs from 'querystringify'
import { removeIsLogin, removeUserInfo, removeTeamInfo, removeInTeam} from '../util/cacheProcessing'

/*"http://127.0.0.1:8080/";*/
const BASEURL = "/api";
const Request = axios.create({
    baseURL: BASEURL,
    withCredentials: true,
    timeout: 15000,
})

/*
* 在请求接口前，对数据进行拦截处理
* */
Request.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        config.data = Qs.stringify(config.data)
        
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);


/*
*请求接口后，对返回数据进行拦截
*/
Request.interceptors.response.use(
    function (res) {

        let data = res.data;

        if(data.status)

        return data;

    }, function (error) {

        //   if (err.response.data.errMsg) {
        //     Vue.prototype.$message({
        //       type: 'error',
        //       message: err.response.data.errMsg
        //     })
        //   }

        //   if (err.response.status === 806) {
        //     Router.push('/login')
        //   }

        // removeIsLogin()
        // removeUserInfo()
        // removeTeamInfo()
        // removeInTeam()
        

        // Router.push('/login')

    

        return Promise.reject(error);
    }
);

export default Request;

