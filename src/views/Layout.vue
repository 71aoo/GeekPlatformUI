<template>
  <div class="layout-div">
    <el-container class="layout-container">
      <!-- 侧边菜单栏 -->
      <Aside></Aside>

      <!-- 左边主要内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from "../components/layout/Aside.vue";

export default {
  name: "layout",
  components: {
    Aside,
  },
  data(){
    return{
      isLogin: false
    }
  }
};
</script>

<style>
.layout-div,
.layout-container {
  width: 100%;
  height: 100%;
}
.el-main {
  background-color: #181626;
  color: #181626;
  /* text-align: center; */
}
</style>
