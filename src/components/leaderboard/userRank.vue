<template>
  <el-table  :data="userList" style="width: 100%" @row-click="userDetail">
    <el-table-column prop label="排名" width="90">
      <template slot-scope="scope">{{ scope.$index + 1 }}</template>
    </el-table-column>
    <el-table-column prop="username" label="用户名" width="300">
      <template slot-scope="scope">
        <img :src="scope.row.headerImg" width="40" height="40" class="head_pic" />
        <span class="team_name">{{ scope.row.username }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="motto"
      label="个性签名"
      width="400"
    ></el-table-column>
    <el-table-column prop="team.name" label="所属队伍" width="250"></el-table-column>
    <el-table-column prop="points" label="积分"></el-table-column>
  </el-table>
</template>

<script>
import { getUserBoard } from "../../api/scoreboard";
export default {
  data() {
    return {
      userList: [],
      url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600150761657&di=cc53335fb6ee34334204ef1ff5c7b89a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F10%2F20170610192627_yhAMN.thumb.700_0.jpeg"
    };
  },
  mounted() {
    this.getUserScoreboard();
  },

  methods: {
    // 获取解题数据
    userDetail(row, event, column) {

      // this.$router.push("/userDetail/" + row.id)
      // console.log(row.id);
    },

    // 获取user积分榜
    getUserScoreboard() {
      getUserBoard().then((res) => {
        if (res.status == 200) {
          this.userList = res.data
        }
      });
    },
  },
};
</script>

<style scoped>
.head_pic {
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}

.users_pic {
  border-radius: 50%;
  margin-left: 5px;
}

.team_name {
  display: inline-block;
  margin-left: 5px;
  /* margin-bottom: auto; */
}
</style>