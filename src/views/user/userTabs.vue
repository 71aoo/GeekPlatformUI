<template>
  <div class="user-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Me" name="first">
        <UserInfo></UserInfo>
      </el-tab-pane>

      <!-- All Users -->
      <el-tab-pane label="Others" name="second">
        <AllUserList></AllUserList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import UserInfo from "../../components/user/userInfo";
import AllUserList from "../../components/user/allUserList";
export default {
  name: "userTabs",
  components: {
    UserInfo,
    AllUserList,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.user-container {
  margin: auto;
  margin-top: 50px;
  width: 70%;
}

.head_pic {
  border-radius: 50%;
}
</style>