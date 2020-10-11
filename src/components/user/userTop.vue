<template>
  <el-row>
    <el-col :span="7">
      <div class="team_container">
        <el-avatar :size="60" :src="userInfo.src"></el-avatar>
        <span class="team_name">{{userInfo.team}}</span>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="avatar_container">
        <el-avatar :size="400" :src="userInfo.src"></el-avatar>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="info_container">
        <h2 class="user_name">{{userInfo.username}}</h2>
        <span class="user_motto">{{userInfo.motto}}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.team_container,
.avatar_container,
.info_container {
  width: 100%;
  height: 400px;
  /* text-align: center; */
}

.solve_list_container {
  width: 100%;
  margin: auto;
}

.team_container {
  vertical-align: bottom;
  height: 350px;
  display: table-cell;
}

.team_name {
  color: #fff;
  font-size: 1em;
  display: block;
}

.user_name {
  color: #fff;
  font-size: 2em;
  margin-top: 50px;
}

.user_motto {
  color: #fff;
  font-size: 1.3em;
}
</style>