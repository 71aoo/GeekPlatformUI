<template>
  <div class="detail_container">
   <TeamTop :TeamInfo="teamInfo"></TeamTop>
    <el-divider content-position="left">个人数据</el-divider>
    <el-row>
      <el-col :span="12">
        <PieChart :data="data"></PieChart>
      </el-col>
      <el-col :span="12">
        <RadarChart :indicator="indicator" :value="value"></RadarChart>
      </el-col>
    </el-row>
    <el-divider content-position="left">提交记录</el-divider>
    <div class="solve_list_container">
      <SolveList :solveList="solveList"></SolveList>
    </div>
  </div>
</template>

<script>
import PieChart from "../../components/chart/pieChart";
import RadarChart from "../../components/chart/radarChart";
import SolveList from "../../components/others/solveList";
import TeamTop from "../../components/team/teamTop"
export default {
  name: "userDetail",
  components: {
    PieChart,
    RadarChart,
    SolveList,
    TeamTop
  },
  data() {
    return {
       // radar data
      value: [60, 73, 85, 40],
      indicator: [
        { text: "品牌", max: 100 },
        { text: "内容", max: 100 },
        { text: "可用性", max: 100 },
        { text: "功能", max: 100 },
      ],
      // pieChart
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 234, name: "联盟广告" },
        { value: 135, name: "视频广告" },
        { value: 1548, name: "搜索引擎" },
      ],
      // solveList
      solveList: [
        {
          name: "还可以",
          score: 60,
          author: "chall",
          data: "2020-09-10 10:21:10",
        },
      ],
      teamInfo: [
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
  mounted(){

  },
  methods:{

    
  }
};
</script>

<style scoped>
.detail_container {
  width: 80%;
  margin: auto;
  margin-top: 50px;
}

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

.el-col{
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