<template>
  <el-container class="content">
    <el-aside width="220px">
      <el-menu class="el-menu-vertical-demo">
        <el-menu-item
          v-for="funcItem in functionDetail"
          @click="handleControlFunction(funcItem.name)"
          :key="funcItem.name"
        >
          <i class="el-icon-menu"></i>
          <span slot="title">{{funcItem.display}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main class="func-area">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
  export default {
    name: 'Content',
    data() {
      return {
        functionDetail: [
          {name: 'ResidentDetail', display: '住户信息'},
          {name: 'LivingPayment', display: '生活缴费'},
          {name: 'Maintain', display: '设备维护'},
          {name: 'HouseRent', display: '房屋租赁'},
          {name: 'ParkingSpace', display: '车位信息'},
          {name: 'DutyRoom', display: '值班记录'},
          {name: 'MessageBoard', display: '业主留言'},
        ],
        func: 'default',
        isCollapse: true,
      };
    },
    methods: {
      handleControlFunction(key) {
        this.$router.push({name: key, params: {}})
      }
    }
  }
</script>
<style>
  .func-area {
    position: relative;
    overflow-y: scroll;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .content {
    overflow-y: hidden;
    height: 90%;
  }
</style>
