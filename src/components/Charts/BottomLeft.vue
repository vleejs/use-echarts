<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import resize from './mixins/resize'
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart',
    },
    id: {
      type: String,
      default: 'chart',
    },
    width: {
      type: String,
      default: '200px',
    },
    height: {
      type: String,
      default: '200px',
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(document.getElementById(this.id))

      let xData = (function () {
        let data = []
        for (let i = 1; i < 13; i++) {
          data.push(i + '月')
        }
        return data
      })()
      this.chart.setOption({
        grid: {},
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#d9d9d9', // x轴颜色
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: true,
              alignWithLabel: true,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
            },
            data: xData, // [ '1月','2月'……]
          },
        ],
        yAxis: [
          {
            type: 'value',
            show: true,
            position: 'left',
            // name: '数量',
            // splitLine: {
            //   show: false,
            // },
            // axisLine: {
            //   lineStyle: {
            //     color: '#90979c',
            //   },
            // },
            // axisTick: {
            //   show: false,
            // },
            // axisLabel: {
            //   interval: 0,
            // },
            // splitArea: {
            //   show: false,
            // },
          },
          {
            type: 'value',
            // name: '百分比',
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ],
        // dataZoom: [
        //   {
        //     show: true,
        //     height: 30,
        //     xAxisIndex: [0],
        //     bottom: 30,
        //     start: 10,
        //     end: 80,
        //     handleIcon:
        //       'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        //     handleSize: '110%',
        //     handleStyle: {
        //       color: '#d3dee5',
        //     },
        //     textStyle: {
        //       color: '#fff',
        //     },
        //     borderColor: '#90979c',
        //   },
        //   {
        //     type: 'inside',
        //     show: true,
        //     height: 15,
        //     start: 1,
        //     end: 35,
        //   },
        // ],
        series: [
          {
            type: 'bar',
            name: '交易失败总数',
            legendHoverLink: true,
            showBackground: false,
            stack: '总量',
            barMaxWidth: 30,
            barGap: '10%', // 不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）
            itemStyle: {
              normal: {
                color: '#d7ecff',
                label: {
                  show: false,
                  // textStyle: {
                  //   color: '#fff',
                  // },
                  // position: 'inside',
                  // formatter: function (p) {
                  //   return p.value > 0 ? p.value : ''
                  // },
                },
              },
            },
            data: [
              709, 1917, 2455, 2610, 1719, 1433, 1544, 3285, 5208, 3372, 2484,
              4078,
            ],
          },

          {
            name: '多次交易成功总数',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 30,
            barGap: '10%', // 不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）
            itemStyle: {
              normal: {
                color: '#9ccfff',
                // barBorderRadius: 0,
                label: {
                  show: false,
                  // position: 'inside',
                  // formatter: function (p) {
                  //   return p.value > 0 ? p.value : ''
                  // },
                },
              },
            },
            data: [
              327, 1776, 507, 1200, 800, 482, 204, 1390, 1001, 951, 381, 220,
            ],
          },
          {
            name: '一次交易总数',
            type: 'bar',
            stack: '总量',
            barMaxWidth: 30,
            barGap: '10%', // 不同系列的柱间距离，为百分比（如 '30%'，表示柱子宽度的 30%）
            itemStyle: {
              normal: {
                color: '#3aa0ff',
                // barBorderRadius: 0,
                label: {
                  show: false,
                  // position: 'inside',
                  // formatter: function (p) {
                  //   return p.value > 0 ? p.value : ''
                  // },
                },
              },
            },
            data: [
              100, 2076, 407, 200, 920, 492, 1204, 390, 999, 201, 581, 290,
            ],
          },
          {
            name: '一次交易成功率',
            type: 'line',
            // symbolSize: 10,
            // symbol: 'circle',
            itemStyle: {
              normal: {
                color: '#f9930e',
                // barBorderRadius: 0,
                // label: {
                //   show: true,
                //   position: 'top',
                //   formatter: function (p) {
                //     return p.value > 0 ? p.value : ''
                //   },
                // },
              },
            },
            data: [
              1036, 3693, 2962, 3810, 2519, 1915, 1748, 4675, 6209, 4323, 2865,
              4298,
            ],
          },
          {
            name: '交易成功率',
            type: 'line',
            // symbolSize: 10,
            // symbol: 'circle',
            itemStyle: {
              normal: {
                color: '#4ec566',
                // barBorderRadius: 0,
                // label: {
                //   show: true,
                //   position: 'top',
                //   formatter: function (p) {
                //     return p.value > 0 ? p.value : ''
                //   },
                // },
              },
            },
            data: [
              1239, 1693, 1962, 6810, 1529, 1215, 1266, 2375, 6209, 4199, 2765,
              3198,
            ],
          },
        ],
      })
    },
  },
}
</script>
