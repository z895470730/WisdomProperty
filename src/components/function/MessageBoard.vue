<template>
  <div class="message-board">
    <div class="msg-item" v-for="item in msg">
      <div class="msg-header">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="msg-header-item">{{item.name}}</span>
        <span class="msg-header-item">{{item.id}}</span>
        <span class="msg-header-item">{{item.data}}</span>
      </div>
      <div class="msg-content">{{item.msgContent}}</div>
      <div class="msg-btm">
        <div v-if="item.reverse">
          <el-avatar icon="el-icon-user-solid" size="small" class="msg-admin"></el-avatar>
          admin
          <div class="msg-re">{{item.reverse}}</div>
        </div>
        <span class="msg-re-btn" v-else>回复</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        msg: [{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: ''
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },{
          id: 10001,
          name: '张三',
          msgContent: '这是一则留言',
          data: '2020-01-10',
          reverse: '管理员回复了'
        },]
      }
    }
  }
</script>
<style>
  .message-board {
    padding: 50px 150px 0 50px;
  }

  .msg-item {
    border: 1px solid lightgray;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .msg-header {
    display: flex;
    align-items: flex-end;
    height: 40px;
  }

  .msg-header-item {
    color: #AAAAAA;
    font-size: 14px;
    margin: 0 3px;
  }

  .msg-content {
    text-align: left;
    padding: 30px 15px 30px 40px;
    border-bottom: 1px dotted lightgray;
  }

  .msg-btm {
    padding: 10px 40px;
    text-align: left;
    color: #AAAAAA
  }

  .msg-re {
    padding-top: 10px;
    padding-left: 20px;
    font-size: 12px;
  }

  .msg-re-btn {
    color: dodgerblue;
    cursor: pointer;
    font-size: 15px;
  }
</style>
