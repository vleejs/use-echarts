<template>
  <div class="panel-title-btn">
    <el-button
      :class="{
        'panel-title-btn_per': true,
        'panel-title-btn_per--active': active === item,
      }"
      v-for="(item, index) in list"
      :key="`${item}_${index}`"
      @click.stop="click(item)"
    >
      {{ item }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'PanelTitleToggleButton',
  props: {
    list: {
      // ['天','月','年'] || ['发行方','天线厂家']
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: '',
    }
  },
  created() {
    if (this.list.length > 0) {
      this.active = this.list[0]
    }
  },
  methods: {
    click(val) {
      this.active = val
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button + .el-button {
  margin-left: 0px;
}
.panel-title-btn {
  &_per {
    width: 55px;
    height: 26px;
    color: #4e9ec5;
    font-size: 12px;
    border: 1px solid #4e9ec5;
    background-color: #fff;
    border-radius: 2px 0px 0px 2px;
    padding: 0;
    line-height: 26px;
    &--active {
      background-color: #4e9ec5;
      color: #fff;
    }
  }
}
</style>
