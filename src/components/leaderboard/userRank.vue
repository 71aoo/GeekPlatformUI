<template>
  <div>
    <el-table v-loading="loading" :data="userList" style="width: 100%" @row-click="userDetail">
      <el-table-column prop label="排名" width="90">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="300">
        <template slot-scope="scope">
          <!-- <img
          :src="scope.row.headerImg"
          width="40"
          height="40"
          class="head_pic"
        /> -->
          <span class="team_name">{{ scope.row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="motto"
        label="个性签名"
        width="400"
      ></el-table-column>
      <el-table-column
        prop="team.name"
        label="所属队伍"
        width="250"
      ></el-table-column>
      <el-table-column prop="points" label="积分"></el-table-column>
    </el-table>
    <div>
      <el-button class="button-load" type="primary" :loading="buttonLoading" @click="loadMore">load more</el-button>
    </div>
  </div>
</template>

<script>
import { getUserBoard } from "../../api/scoreboard";
export default {
  data() {
    return {
      userList: [],
      loading: true,
      buttonLoading: false,
      page: 1,
    };
  },
  mounted() {
  
    this.getUserScoreboard(this.page);
  },

  methods: {
    // 获取解题数据
    userDetail(row, event, column) {
      // this.$router.push("/userDetail/" + row.id)
      // console.log(row.id);
    },

    // 获取user积分榜
    getUserScoreboard(data) {
      getUserBoard(data).then((res) => {
        if (res.status == 200) {
          this.userList = res.data;
          this.loading = false
        }
      });
    },

    loadMore() {
      this.page += 1;
      this.buttonLoading = true
      getUserBoard(this.page).then((res) => {
        if (res.status == 200) {
          this.userList = this.userList.concat(res.data);
          this.buttonLoading = false
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
.button-load{
  margin-top: 10px;
  width: 100%;
}
</style>