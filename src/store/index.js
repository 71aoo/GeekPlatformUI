import Vue from "vue";
import Vuex from "vuex";
import { setIsLogin, setInTeam, getIsLogin, getInTeam } from "../util/cacheProcessing"

Vue.use(Vuex);

const store = new Vuex.Store({
    
    state: {

        // 是否登录
        isLogin: getIsLogin(),

        // 是否加入队伍
        isInTeam: getInTeam(),
        
        // 题目标签
        categories: []

    },
    mutations: {

        // 改变登录状态
        changeLoginState(state, loginState) {
            setIsLogin(loginState)
            state.isLogin = loginState;
        },

        // 该变队伍状态
        changeTeamState(state, teamState) {

            setInTeam(teamState)
            state.isInTeam = teamState
        },

        changeCategories(state, categories){

            let chartCate = [];

            for(let i = 0; i < categories.length; i++){

                let item = {};
                item.text = categories[i].name
                item.max = categories[i].count
                chartCate.push(item)

            }

            state.categories = chartCate
        }
    },
    actions: {},
    modules: {}
});

export default store;