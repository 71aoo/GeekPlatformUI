<template>
  <el-row>
    <el-col :span="7">
      <div class="user_container">
        <el-row>
          <el-col :span="12">
            <el-tooltip
              class="user_avatar"
              effect="dark"
              content="Bottom Center 提示文字"
              placement="bottom"
            >
              <el-avatar :size="60" :src="imageUrl"></el-avatar>
            </el-tooltip>
          </el-col>
          <el-col :span="12">
            <el-tooltip
              class="user_avatar"
              effect="dark"
              content="Bottom Center 提示文字"
              placement="bottom"
            >
              <el-avatar :size="60" :src="imageUrl"></el-avatar>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="avatar_container">
        <el-avatar :size="400" :src="imageUrl"></el-avatar>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="info_container">
        <h2 class="team_name">胜利女神在微笑</h2>
        <span class="team_motto">你腼腆的笑容是这故事的开始</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      indicator: [
        { text: "品牌", max: 100 },
        { text: "内容", max: 100 },
        { text: "可用性", max: 100 },
        { text: "功能", max: 100 },
      ],
      userList: [
        {
          src:
            "http://file.qqtouxiang.com/keai/2020-07-01/b7c14d159755baaf0057ba9cf77eb720.jpeg",
          username: "王小虎",
          motto: "胜利女神在微笑",
          team: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      imageUrl:
        "http://file.qqtouxiang.com/keai/2020-07-01/b7c14d159755baaf0057ba9cf77eb720.jpeg",
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