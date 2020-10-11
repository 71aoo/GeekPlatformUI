<template>
  <div class="pieReport" id="pieReport" style="width: 400px;height: 400px;margin:auto;"></div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.drawPie("pieReport");
  },
  methods: {
    drawPie(id) {
      this.charts = this.$echarts.init(document.getElementById(id), "light");
      this.charts.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        series: [
          {
            name: "题目占比",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.data,
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>