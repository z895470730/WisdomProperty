<template>
  <div class="message-board">
    <div class="msg-item" v-for="item in msg">
      <div class="msg-header">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="msg-header-item">{{item.name}}</span>
        <span class="msg-header-item">{{item.date}}</span>
      </div>
      <div class="msg-content">{{item.msg}}</div>
      <div class="msg-btm">
        <div v-if="item.reply">
          <el-avatar icon="el-icon-user-solid" size="small" class="msg-admin"></el-avatar>
          admin
          <div class="msg-re">{{item.replyMsg}}</div>
        </div>
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <div style="display: flex">
            <el-input v-model="reply"></el-input>
            <el-button
              size="mini"
              type="primary"
              style="margin-left: 20px"
              @click="replyMsg(item)"
            >回复</el-button>
          </div>
          <span class="msg-re-btn" v-if="!item.reply" slot="reference">回复</span>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MessageBoard',
    data() {
      return {
        msg: [{
          _id: '',
          name: '',
          date: '',
          msg: '',
          reply: false,
          replyMsg: ''
        }],
        reply: ''
      }
    },
    created() {
      this.getMsg();
    },
    methods: {
      getMsg() {
        this.$http.get('http://127.0.0.1:8090/api/message')
          .then((res) => {
            if(res.status >= 200 && res.status < 400) {
              this.msg = res.data;
            }
          })
      },

      replyMsg(item) {
        console.log(item)
        this.$http.post('http://127.0.0.1:8090/api/message', {
          name: item.name,
          reply: true,
          replyMsg: this.reply
        })
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
