<template>
  <el-table :data="solveList" style="width: 100%" :default-sort = "{prop: 'createdTime', order: 'descending'}">
    <el-table-column prop="name" label="题目" sortable></el-table-column>
    <el-table-column prop="score" label="分数" sortable></el-table-column>
    <el-table-column prop="author.name" label="作者" sortable></el-table-column>
    <el-table-column
      prop="createdTime"
      :formatter="dataFormatter"
      label="提交时间"
      sortable
      
    ></el-table-column>
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
  methods: {
    dataFormatter(row, column, cellValue, index) {
      console.log(row);
      // console.log(column)
      const daterc = row["updatedTime"];
      console.log(daterc);
      // let data = new Date(daterc)
      // return formateDate(date, 'YYYY-MM-dd hh:mm')
      let json_date = new Date(daterc).toJSON();
      return new Date(new Date(json_date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    },
  },
};
</script>

<style scoped>
.solve_list {
  width: 100%;
  padding: 0;
}
</style>