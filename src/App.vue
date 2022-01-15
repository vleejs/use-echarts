<template>
  <div id="app">
    <el-row :gutter="12" class="first-row">
      <el-col :span="8" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <div slot="header">
            <div>总交易情况</div>
          </div>
          <div class="left-top-cont">
            <div class="left-top-cont_l">
              <div class="left-top-cont_l-text">
                <div>交易总金额</div>
                <div>7077.77</div>
              </div>
              <div class="left-top-cont_l-icon">
                <img src="./assets/top-left-l.png" alt="" />
              </div>
            </div>
            <div class="left-top-cont_r">
              <div class="left-top-cont_r-l">
                <img src="./assets/top-left-r.png" alt="" />
              </div>
              <div class="left-top-cont_r-r">
                <div class="top">交易总数</div>
                <div class="bottom">9982</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <div slot="header">
            <div>总交易情况</div>
          </div>
          <!-- card body -->
          <div class="left-top-cont">
            <div class="left-top-cont_r">
              <div class="left-top-cont_r-l">
                <img src="./assets/top-center-l.png" alt="" />
              </div>
              <div class="left-top-cont_r-r">
                <div class="top">交易成功率</div>
                <div class="bottom">99.82%</div>
              </div>
            </div>
            <div class="left-top-cont_r">
              <div class="left-top-cont_r-l">
                <img src="./assets/top-center-r.png" alt="" />
              </div>
              <div class="left-top-cont_r-r">
                <div class="top">交易成功总数</div>
                <div class="bottom">9982</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <div slot="header">
            <div>一次交易情况</div>
          </div>
          <!-- card body -->
          <div class="left-top-cont">
            <div class="left-top-cont_r">
              <div class="left-top-cont_r-l">
                <img src="./assets/top-bottom-l.png" alt="" />
              </div>
              <div class="left-top-cont_r-r">
                <div class="top">一次交易成功率</div>
                <div class="bottom">99.82%</div>
              </div>
            </div>
            <div class="left-top-cont_r">
              <div class="left-top-cont_r-l">
                <img src="./assets/top-bottom-r.png" alt="" />
              </div>
              <div class="left-top-cont_r-r">
                <div class="top">一次交易成功总数</div>
                <div class="bottom">540</div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12" class="second-row">
      <el-col :span="16" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <div slot="header">
            <div>总交易情况总览</div>
            <PanelTitleToggleButton :list="['天', '月', '年']" />
          </div>
          <!-- card body -->
          <div class="chart-container">
            <BottomLeft height="100%" width="100%" />
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" :offset="0">
        <el-card shadow="hover" :body-style="{ padding: '20px' }">
          <div slot="header">
            <div>一次交易情况</div>
            <PanelTitleToggleButton :list="['天', '月', '年']" />
          </div>
          <!-- card body -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelTitleToggleButton from './components/PanelTitleToggleButton'
import BottomLeft from './components/Charts/BottomLeft.vue'
export default {
  name: 'App',
  components: {
    PanelTitleToggleButton,
    BottomLeft,
  },
}
</script>

<style lang="scss">
body {
  background-color: #ccc;
}
.el-card__header {
  padding: 0;
  height: 48px;
  background-color: #fafafa;

  & > div {
    width: 100%;
    padding-left: 35px;
    padding-right: 35px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
  }
}
.el-card__body {
  min-height: 235px;
  display: flex;
  align-items: center;
}
</style>
<style lang="scss" scoped>
.first-row {
  margin-bottom: 20px;
  .left-top-cont {
    width: 100%;
    display: flex;
    &_l {
      width: 50%;
      height: 112px;
      border-radius: 13px;
      background-color: #4e9ec5;
      box-sizing: border-box;
      padding: 10px 5%;
      display: flex;
      justify-content: space-around;
      &-text {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        div:first-child {
          font-size: 16px;
          color: #fff;
        }
        div:nth-of-type(2) {
          font-size: 36px;
          color: #fff;
        }
      }
      &-icon {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-sizing: border-box;
        padding-bottom: 10px;
      }
    }
    &_r {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 50%;
      height: 112px;
      &-l {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background-color: #f0f3fb;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 36px;
          height: 36px;
        }
      }
      &-r {
        .top {
          color: #8594be;
          font-size: 16px;
          box-sizing: border-box;
          margin-bottom: 4px;
          text-align: center;
        }
        .bottom {
          font-size: 36px;
          color: #414952;
        }
      }
    }
  }
}
.second-row {
  .chart-container {
    position: relative;
    width: 100%;
    height: 500px;
  }
}
</style>
