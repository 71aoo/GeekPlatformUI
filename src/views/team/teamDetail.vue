<template>
  <div class="detail_container">
    <TeamTop :teamInfo="teamInfo"></TeamTop>
    <el-divider content-position="left">个人数据</el-divider>
    <el-row>
      <el-col :span="12" v-if="PieChartVisible">
        <PieChart :data="data"></PieChart>
      </el-col>
      <el-col :span="12" v-if="RadarChartVisible">
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
import TeamTop from "../../components/team/teamTop";
import { getTeamInfo } from "../../api/team";
import {
  GetTeamSolvedChallenges,
  GetUserSolvedChallenges,
} from "../../api/challenge";
export default {
  name: "userDetail",
  components: {
    PieChart,
    RadarChart,
    SolveList,
    TeamTop,
  },
  data() {
    return {
      // radar data
      value: [],
      indicator: this.$store.state.categories,
      // pieChart
      data: [],
      // solveList
      solveList: [],
      teamInfo: {},
      RadarChartVisible: false,
      PieChartVisible: false,
    };
  },
  mounted() {
    // console.log(this.$router)
    this.getTeamInfoByID(this.$route.params.id);
    this.getTeamSolvedChallenges(this.$route.params.id);
  },
  methods: {
    getTeamInfoByID(id) {
      getTeamInfo(id).then((res) => {
        if (res.status == 200) {
          this.teamInfo = res.data;
        }
      });
    },
    getTeamSolvedChallenges(id) {
      GetTeamSolvedChallenges(id).then((res) => {
        // console.log("dsds")
        console.log(res)
        
        if (res.status == 200) {
          
          this.solveList = res.data;
          // this.formatCategoryCount(res.data);
          let cate = []; // [ cate, cate,..]
          let cateCount = {}; // {cate: num}
          let list = res.data;
          for (let i = 0; i < list.length; i++) {
            let key = list[i].challenge.category.name;

            if (cate.includes(key)) {
              cateCount[key] += 1;
            } else {
              // 记录改分类
              cate.push(key);
              // 初始值 1
              cateCount[key] = 1;
            }
          }

          // value
          let cateSort = this.$store.state.categories;
          let v = [];
          let num = 0;
          for (let j in cateSort) {
            if (
              cateCount[cateSort[j].text] != null &&
              cateCount[cateSort[j].text] != ""
            ) {
              v.push(cateCount[cateSort[j].text]);
            } else {
              num += 1;
              v.push(0);
            }
          }

          this.value = v;
          // console.log(num);
          this.RadarChartVisible = true;

          let d = [];
          for (let k in cateCount) {
            let item = {};
            item.name = k;
            item.value = cateCount[k];
            d.push(item);
          }
          // console.log(d);
          if (d.length != 0 ) {
            this.data = d;
            // console.log(d);
            this.PieChartVisible = true;
          }else{
            let item = {};
            item.name = "....";
            item.value = 1;
            d.push(item)
            this.data = d;
            // console.log(d);
            this.PieChartVisible = true;
          }
        }
      });
    },
  },
  watch: {
    $route(to, from) {
      // console.log(this.$route.params.id);
    },
    solveList(newVal, oldVal) {
      // console.log(newVal);
    },
  },
  computed: {},
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