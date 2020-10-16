<template>
  <el-table :data="teamList" style="width: 100%" :default-sort="{prop: 'name', order: 'ascending'}" @row-click="teamDetail">
    <el-table-column sortable prop="name" label="队伍名" width="300">
      <template slot-scope="scope">
        <img :src="scope.row.headerImg" width="40" height="40" class="head_pic" />
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
        <img v-if="scope.row.memberOne != null" :src="scope.row.memberOne.headerImg" width="40" height="40" class="users_pic" />
        <img v-if="scope.row.memberTwo != null" :src="scope.row.memberTwo.headerImg" width="40" height="40" class="users_pic" />
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
      url:
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600150761657&di=cc53335fb6ee34334204ef1ff5c7b89a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F10%2F20170610192627_yhAMN.thumb.700_0.jpeg",
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