<template>
  <div class="challenges_container">
    <el-row :gutter="20">
      <el-col :span="5" v-for="(challenge, i) in challenges" :key="i">
        
        <Challenge v-if="!challenge.isSolved"
          :challenge="challenge"
          :answerShow="challenge.isSolved"
          :teamInfo="teamInfo"
          :userInfo="userInfo"
          :color = "'#181626'"
        ></Challenge>
        
        <Challenge v-else
          :challenge="challenge"
          :answerShow="challenge.isSolved"
          :teamInfo="teamInfo"
          :userInfo="userInfo"
          :color = "'#177cb0'"
        ></Challenge>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Challenge from "../../components/challenge/challenge";
import { getChallengesByCategory } from "../../api/challenge";
import {
  getInTeam,
  getTeamInfo,
  getUserInfo,
} from "../../util/cacheProcessing";
export default {
  name: "challenges",
  components: {
    Challenge,
  },
  data() {
    return {
      challenges: [],
      teamInfo: {},
      userInfo: {},
      answerShow: false,
    };
  },

  //监听路由是否变化
  watch: {
    $route(to, from) {
      if (
        getInTeam() != null &&
        getInTeam() != false &&
        getInTeam() == "true"
      ) {
        this.teamInfo = getTeamInfo();

        this.userInfo = getUserInfo();

        this.answerShow = true;

        this.getChallenges(to.params.id);
      }
    },
  },
  mounted() {
    if (getInTeam() != null && getInTeam() != false && getInTeam() == "true") {
      this.userInfo = getUserInfo();
      this.teamInfo = getTeamInfo();
      this.answerShow = true;
      this.getChallenges(this.$route.params.id);
    }
  },

  methods: {
    getChallenges(id) {
      getChallengesByCategory(id).then((res) => {
        if (res.status == 200) {
          this.challenges = res.data;
        }
      });
    },
  },
};
</script>

<style scoped>
.challenges_container {
  margin: auto;
  margin-top: 100px;
  width: 80%;
  text-align: center;
}
</style>