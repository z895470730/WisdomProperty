<template>
  <div>
    <div></div>
    <div class="devices">
      <div class="device-item" v-for="(item, index) in deviceDetail">
        <div class="device-opt device-id">设备编号：{{item.deviceId}}</div>
        <div class="device-opt">设备类型：{{item.type}}</div>
        <div class="device-opt">设备位置：{{item.address}}</div>
        <div class="device-opt device-state">
          损坏状况：
          <span :style="item.state ? 'color:limegreen': 'color:red'">
            <div class="device-state-circle"></div>
            {{item.state ? '正常' : '待维修'}}
          </span>
        </div>
        <div class="device-opt">上次检修：{{item.preTain}}</div>
        <div class="device-opt">检修人员：{{item.functionary}}</div>
        <div class="line"></div>
        <div class="device-btn" style="display: flex; justify-content: flex-end">
          <span>通知人员维护</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MainTain',
    data() {
      return {
        deviceDetail: [{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },{
          deviceId: '001',
          type: '路灯',
          address: 'A区3号路',
          preTain: '2019-12-10',
          state: true,
          functionary: '张三'
        },]
      }
    }
  }
</script>
<style>
  .devices {
    display: grid;
    grid-template-columns: 31% 31% 31%;
  }

  .device-id {
    padding-bottom: 10px;
    border-bottom: 1px dashed lightgray;
  }

  .device-item {
    margin: 0 auto 20px auto;
    box-shadow: 1px 1px 3px lightgray;
    border-radius: 4px;
    color: gray;
    text-align: left;
    width: 90%;
  }

  .device-opt {

    font-size: 14px;
    margin: 8px;
    position: relative;
  }

  .device-state-circle {
    display: inline-block;
    width: 5px;
    height: 5px;
    background: limegreen;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  .line {
    border-bottom: 1px dashed lightgray;
  }

  .device-btn {
    line-height: 40px;
    color: dodgerblue;
    padding-right: 15px;
    cursor: pointer;
    font-size: 14px;
  }
</style>
