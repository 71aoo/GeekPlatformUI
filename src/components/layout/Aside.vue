<template>
  <el-aside width="250px" class="aside_container">
    <div class="logo_container">
      <img
        class="logo"
        src="https://geekplateform.oss-cn-beijing.aliyuncs.com/logo.png"
        alt=""
      />
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#1E1C34"
      text-color="#fff"
      active-text-color="#ffd04b"
      @open="handleOpen"
      @close="handleClose"
      unique-opened
      router
    >
      <el-submenu index="1">
        <template slot="title">
          <span class="menu_text_title">GeeksChallenge</span>
        </template>
        <el-menu-item v-for="(item, i) in GCCTFNav" :key="i" :index="item.name">
          <span class="menu_text">{{ item.navItem }}</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2" v-show="!$store.state.isLogin">
        <template slot="title">
          <span class="menu_text_title">Login</span>
        </template>
        <el-menu-item v-for="(item, i) in LoginNav" :key="i" :index="item.name">
          <span class="menu_text">{{ item.navItem }}</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3" v-show="$store.state.isLogin">
        <template slot="title">
          <span class="menu_text_title">Challenge</span>
        </template>
        <el-menu-item
          v-for="(item, i) in Challenge"
          :key="i"
          :index="'/challenges/category/' + item.id"
        >
          <span class="menu_text">{{ item.name }}</span>
          <span class="menu_text_count">{{ item.count }}</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4" v-show="$store.state.isLogin">
        <template slot="title">
          <span class="menu_text_title">{{ userInfo.username }}</span>
        </template>
        <el-menu-item v-for="(item, i) in UserNav" :key="i" :index="item.name">
          <span class="menu_text">{{ item.navItem }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- <div class="qax-logo"> -->
    <img
      class="qax-logo"
      style="max-width: 100%; vertical-align: bottom"
      src="https://geekplateform.oss-cn-beijing.aliyuncs.com/qaxLogo.png"
      alt=""
    />
    <!-- </div> -->
  </el-aside>
</template>

<script>
import { GetCategorie } from "../../api/category";
import { getInfo } from "../../api/user";
import {
  getIsLogin,
  setUserInfo,
  setInTeam,
  setTeamInfo,
} from "../../util/cacheProcessing";
export default {
  name: "Aside",
  data() {
    return {
      GCCTFNav: [
        { name: "/announcements", navItem: "Announcements" },
        { name: "/users", navItem: "Users" },
        { name: "/team", navItem: "Teams" },
        { name: "/leaderboard", navItem: "Leaderboard" },
      ],
      LoginNav: [
        { name: "/login", navItem: "Login" },
        { name: "/register", navItem: "Register" },
      ],
      Challenge: [],
      UserNav: [
        { name: "/profile", navItem: "Profile" },
        { name: "/teams", navItem: "Team" },
        { name: "/logout", navItem: "Logout" },
      ],
      isLogin: false,
      userInfo: {},
    };
  },
  created() {},
  mounted() {
    let Login = getIsLogin();

    if (Login == null || Login == false) {
      this.isLogin = false;
    } else {
      this.isLogin = true;

      this.getUserInfo();

      this.getAllCategory();
    }
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    // 获取题目分类
    getAllCategory() {
      GetCategorie().then((response) => {
        this.Challenge = response.data;
      });
    },

    // 获取用户信息
    getUserInfo() {
      getInfo().then((response) => {
        if (response.status == 200) {
          let userInfo = response.data;
          // console.log(response)
          this.userInfo = userInfo;
          setUserInfo(userInfo);

          if (
            userInfo.teamId != null &&
            userInfo.teamId != 0 &&
            userInfo.teamId != "0"
          ) {
            this.$store.commit("changeTeamState", true);

            setTeamInfo(response.data.team);
          }
        }
      });
    },
  },
};
</script>

<style>
/* 侧边栏背景色 */
.el-aside {
  background-color: #1e1c34;
}

/* 菜单 */
.el-menu {
  border-right-width: 0;
}

/* 顶部logo框 */
.logo_container {
  height: 130px;
  /* max-height: 100px; */
  /* max-width: 250px; */
  width: 100%;
  /* background: #333; */
}

.logo {
  max-width: 250px;
}

/* 菜单文字 */
.menu_text_title {
  font-size: 1.5em;
}
.menu_text {
  font-size: 1.3em;
}
.menu_text_count {
  color: #403892;
}

.qax-logo {
  display: table-cell;
  vertical-align: middle;
}
/* .qax-logo{
  display:table-cell;   
 
} */

/* .qax-logo{
  display: table-cell;   
} */
.qax-logo {
  
  position: absolute;
  /* max-width: 10px; */
  width: 280px;
  top: 80%;
  /* left: 10px; */
  left: -10px;
  /* bottom: 100px; */
  

}
</style>