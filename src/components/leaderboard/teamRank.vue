<template>
  <el-table :data="teamList" style="width: 100%" @row-click="teamDetail">
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
        <span v-if="scope.row.memberOne">{{ scope.row.memberOne.username }} </span>
        <br>
        <span  v-if="scope.row.memberTwo">{{ scope.row.memberTwo.username }} </span>
      </template>
    </el-table-column>
    <el-table-column prop="points" label="积分"></el-table-column>
  </el-table>
</template>

<script>
import { getTeamBoard } from "../../api/scoreboard";
export default {
  data() {
    return {
      teamList: [],
      loading: true
    };
  },
  mounted() {
    this.getTeamScoreboard();
  },
  methods: {
    teamDetail(row, event, column) {
      // // console.log(row, event, column);
      // console.log(row);
      this.$router.push("teamDetail/" + row.id)
    },

    getTeamScoreboard() {
      getTeamBoard().then((res) => {
        if (res.status == 200) {
          this.teamList = res.data;
          // console.log(res.data)
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