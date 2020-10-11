<template>
  <div id="radar_chart" style="width: 400px;height: 400px; margin:auto"></div>
</template>

<script>
export default {
   props: {
    indicator: {
      type: Array,
      required: true,
    },
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // indicator: [
      //   { text: "品牌", max: 100 },
      //   { text: "内容", max: 100 },
      //   { text: "可用性", max: 100 },
      //   { text: "功能", max: 100 },
      // ],
    };
  },
  mounted() {
    this.drawPie("radar_chart");
    
  },
  methods: {
    drawPie(id) {
      this.charts = this.$echarts.init(document.getElementById(id), "light");
      this.charts.setOption({
        tooltip: {
          trigger: "axis",
        },
        radar: [
          {
            indicator: this.indicator,
            center: ["50%", "50%"],
            radius: 120,
          },
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item",
            },
            areaStyle: {},
            data: [
              {
                value: this.value,
                name: "ctf",
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>