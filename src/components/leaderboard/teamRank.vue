<template>
  <div>
    <el-table
      :data="teamList"
      style="width: 100%"
      @row-click="teamDetail"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column prop label="排名" width="90">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column prop="name" label="队伍名" width="300">
        <template slot-scope="scope">
          <!-- <img
          :src="scope.row.headerImg"
          width="40"
          height="40"
          class="head_pic"
        /> -->
          <span class="team_name">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="motto"
        label="个性签名"
        width="400"
      ></el-table-column>
      <el-table-column label="成员" width="200">
        <template slot-scope="scope">
          <!-- <img
          v-if="scope.row.memberOne"
          :src="scope.row.memberOne.headerImg"
          :title="scope.row.memberOne.username"
          width="40"
          height="40"
          class="users_pic"
        />
        <img
          v-if="scope.row.memberTwo"
          :src="scope.row.memberTwo.headerImg"
          :title="scope.row.memberTwo.username"
          width="40"
          height="40"
          class="users_pic"
        /> -->
          <span v-if="scope.row.memberOne"
            >{{ scope.row.memberOne.username }}
          </span>
          <br />
          <span v-if="scope.row.memberTwo"
            >{{ scope.row.memberTwo.username }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="points" label="积分"></el-table-column>
    </el-table>
    <div>
      <el-button class="button-load" type="primary" :loading="buttonLoading" @click="loadMore">load more</el-button>
    </div>
    
  </div>
</template>

<script>
import { getTeamBoard } from "../../api/scoreboard";
export default {
  data() {
    return {
      teamList: [],
      loading: true,
      buttonLoading: false,
      page: 1,
    };
  },
  mounted() {
    this.getTeamScoreboard(this.page);
  },
  methods: {
    teamDetail(row, event, column) {
      this.$router.push("teamDetail/" + row.id);
    },

    getTeamScoreboard(data) {
      getTeamBoard(data).then((res) => {
        if (res.status == 200) {
          this.teamList = res.data;
          this.loading = false
        }
      });
    },
    loadMore() {
      this.page += 1;
      this.buttonLoading = true
      getTeamBoard(this.page).then((res) => {
        if (res.status == 200) {
          this.teamList = this.teamList.concat(res.data);
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