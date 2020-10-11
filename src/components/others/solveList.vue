<template>
  <el-table :data="solveList" style="width:100%">
    <el-table-column prop="name" label="题目"></el-table-column>
    <el-table-column prop="score" label="分数"></el-table-column>
    <el-table-column prop="author" label="作者"></el-table-column>
    <el-table-column prop="data" label="提交时间"></el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    solveList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.solve_list {
  width: 100%;
  padding: 0;
}
</style>