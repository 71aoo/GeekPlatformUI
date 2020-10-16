<template>
  <el-row>
    <el-col :span="7">
      <div class="user_container">
        <el-row>
          <el-col :span="12" v-if="teamInfo.memberOne">
            <el-tooltip
              class="user_avatar"
              effect="dark"
              :content="teamInfo.memberOne.username"
              placement="bottom"
            >
              <el-avatar :size="60" :src="teamInfo.memberOne.headerImg"></el-avatar>
            </el-tooltip>
          </el-col>
          <el-col :span="12" v-if="teamInfo.memberTwo">
            <el-tooltip
              class="user_avatar"
              effect="dark"
              :content="teamInfo.memberTwo.username"
              placement="bottom"
            >
              <el-avatar :size="60" :src="teamInfo.memberTwo.headerImg"></el-avatar>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="avatar_container">
        <el-avatar :size="400" :src="teamInfo.headerImg"></el-avatar>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="info_container">
        <h2 class="team_name">{{ teamInfo.name }}</h2>
        <span class="team_motto">{{ teamInfo. motto }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    teamInfo: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
    };
  },
};
</script>

<style scoped>
.user_container,
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

.user_container {
  vertical-align: bottom;
  height: 350px;
  display: table-cell;
}

.el-col {
  padding: 10px;
}
.user_name {
  color: #fff;
  font-size: 1em;
  display: block;
}

.team_name {
  color: #fff;
  font-size: 2em;
  margin-top: 50px;
}

.team_motto {
  color: #fff;
  font-size: 1.3em;
}
</style>