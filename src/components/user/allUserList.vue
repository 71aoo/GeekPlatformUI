<template>
  <el-table :data="userList" style="width: 100%" @row-click="userDetail">
    <el-table-column prop="username" label="用户名" width="300">
      <template slot-scope="scope">
        <img :src="scope.row.headerImg" width="40" height="40" class="head_pic" />
        <span class="name">{{ scope.row.username }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="motto"
      label="个性签名"
      width="600"
    ></el-table-column>
    <el-table-column label="所属队伍" prop="team.name">
    </el-table-column>
  </el-table>
</template>

<script>
import { getUserBoard } from "../../api/scoreboard";
import { getAllUser } from "../../api/user"
import { getTeamInfo } from "../../api/team";
export default {
  data() {
    return {
      userList: [],
      url:
        "http://file.qqtouxiang.com/keai/2020-07-01/b7c14d159755baaf0057ba9cf77eb720.jpeg",
    };
  },
  mounted() {
    this.getUserScoreboard();
  },
  methods: {
    // 获取解题数据
    userDetail(row, event, column) {
      console.log(row, event, column);
    },


    getUserScoreboard() {
      getAllUser().then((res) => {
        if (res.status == 200) {
          this.userList = res.data;
          console.log(res.data)
        }
      });
    },
  },
};
</script>

<style scoped>
</style>