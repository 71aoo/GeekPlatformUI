<template>
  <el-table :data="teamList" style="width: 100%" :default-sort="{prop: 'name', order: 'ascending'}" @row-click="teamDetail">
    <el-table-column sortable prop="name" label="队伍名" width="300">
      <template slot-scope="scope">
        <!-- <img :src="scope.row.headerImg" width="40" height="40" class="head_pic" /> -->
        <span class="name">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="motto"
      label="个性签名"
      width="600"
    ></el-table-column>
    <el-table-column label="成员">
      <template slot-scope="scope">
        <span v-if="scope.row.memberOne">{{ scope.row.memberOne.username }} </span>
        <br>
        <span v-if="scope.row.memberTwo">{{ scope.row.memberTwo.username }} </span>
        <!-- <img v-if="scope.row.memberOne != null" :src="scope.row.memberOne.headerImg" width="40" height="40" class="users_pic" />
        <img v-if="scope.row.memberTwo != null" :src="scope.row.memberTwo.headerImg" width="40" height="40" class="users_pic" /> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { getTeamList } from "../../api/team";
export default {
  data() {
    return {
      activeName: "first",
      teamList: [],
      
    };
  },
  mounted() {
    this.getAllTeamsList();
  },
  methods: {
    teamDetail(row, event, column) {
      console.log(row);
    },

    getAllTeamsList() {
      getTeamList().then((res) => {
        if (res.status == 200) {
          this.teamList = res.data;
          console.log(res)
        }
      });
    },
  },
};
</script>

<style scoped>
.head_pic {
  border-radius: 50%;
}

.users_pic {
  border-radius: 50%;
  margin-left: 5px;
}
</style>