<template>
  <div class="leaderboard-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- Team rank -->
      <el-tab-pane label="Teams" name="first">
        <TeamRank></TeamRank>
      </el-tab-pane>

      <!-- Users rank -->
      <el-tab-pane label="Users" name="second">
        <UserRank></UserRank>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TeamRank from "../../components/leaderboard/teamRank";
import UserRank from "../../components/leaderboard/userRank";
export default {
  name: "leaderboard",
  components: {
    TeamRank,
    UserRank,
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
.leaderboard-container {
  margin: auto;
  margin-top: 50px;
  width: 70%;
}


</style>