<template>
  <div class="team_container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Me" name="first">
          <TeamInfo></TeamInfo>
      </el-tab-pane>

      <!-- All Teams -->
      <el-tab-pane label="Others" name="second">
          <TeamList></TeamList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TeamInfo from "../../components/team/teamInfo";
import TeamList from "../../components/team/teamList";
export default {
  name: "teamTabs",
  components: {
    TeamInfo,
    TeamList,
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
.team_container {
  margin: auto;
  margin-top: 50px;
  width: 70%;
}
</style>