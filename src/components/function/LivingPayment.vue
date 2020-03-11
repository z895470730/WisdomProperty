<template>
  <div class="living-payment">
    <div class="payment-search">
      <div style="font-size:20px" v-text="typeActive"></div>
      <div class="payment-input-area">
        <input class="payment-input" placeholder="请输入要充值的户号" v-model="searchUserText"/>
      </div>
      <el-card class="box-card" style="box-shadow: none">
        <div slot="header" class="clearfix">
          <span>住户信息</span>
        </div>
        <div class="text item">门牌号：{{searchDetail.id}}</div>
        <div class="text item">户主姓名：{{searchDetail.name}}</div>
        <div class="text item">电费余额：{{searchDetail.energy}}元</div>
        <div class="text item">水费余额：{{searchDetail.water}}元</div>
        <div class="text item">燃气费余额：{{searchDetail.fuel}}元</div>
        <div class="text item">物业费余额：{{searchDetail.property}}元</div>
      </el-card>
    </div>
    <div style="width: 50%; border-left: 1px solid lightgray">
      <div class="payment-option">
        <el-radio-group v-model="typeActive">
          <el-radio-button label="电费缴纳"></el-radio-button>
          <el-radio-button label="水费缴纳"></el-radio-button>
          <el-radio-button label="物业费缴纳"></el-radio-button>
          <el-radio-button label="燃气费缴纳"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="money">
        <div
          class="money-item"
          v-for="(item, index) in moneyList"
          @click="moneyActive = moneyList[index].num"
          :style="item.num === moneyActive ? 'background: dodgerblue; color: white' : ''"
        >
          {{item.num}}
        </div>
      </div>
      <div class="payment-btn" @click="recharge">充值</div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'LivingPayment',
    data() {
      return {
        moneyList: [
          {num: '50'}, {num: '100'},
          {num: '200'}, {num: '300'},
          {num: '500'}, {num: '1000'}
        ],
        typeActive: '电费缴纳',
        moneyActive: '',
        searchUserText: '',
        searchDetail: {
          id: '用户户号',
          name: '住户姓名',
          energy: '0',
          fuel: '0',
          property: '0',
          water: '0'
        },
        userId: '',
        typeActiveChar: 'energy'
      };
    },
    methods: {
      getUserBalance(id) {
        this.$http.get('http://127.0.0.1:8090/api/balance',{
          params: {
            id: id
          }
        })
          .then((res) => {
            if(res.status < 400) {
              this.searchDetail = res.data;
            }
          })
      },

      recharge() {
        if(this.userId.length !== 5) {
          return null;
        }
        this.$http.post('http://127.0.0.1:8090/api/balance', {
          whereStr: this.userId,
          data: {
            type: this.typeActiveChar,
            value: this.moneyActive
          }
        },{
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then((res) => {
            this.getUserBalance(this.userId);
          })
      }
    },
    watch: {
      searchUserText: function(val) {
        this.userId = val;
        if(val.length === 5) {
          this.getUserBalance(val);
        }
      },

      typeActive: function (val) {
        switch (val) {
          case '电费缴纳':
            this.typeActiveChar = 'energy';
            break;
          case '水费缴纳':
            this.typeActiveChar = 'water';
            break;
          case '燃气费缴纳':
            this.typeActiveChar = 'fuel';
            break;
          case '物业费缴纳':
            this.typeActiveChar = 'property';
            break;
        }
      }
    }
  }
</script>
<style>
  .living-payment {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .payment-search {
    width: 45%;
    margin: 25px auto 0 auto;
  }

  .payment-option {
    display: flex;
    justify-content: center;
  }

  .payment-input-area {
    border: 1.3px solid dodgerblue;
    border-radius: 50px;
    height: 40px;
    position: relative;
    margin-top: 40px;
  }

  .payment-input {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    height: 90%;
    border: 0;
    font-size: 17px;
    caret-color: dodgerblue;
    outline: none;
  }

  .payment-btn {
    right: -2px;
    top: 0;
    background: dodgerblue;
    color: white;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
    margin: 30px auto 0 auto;
    width: 230px;
    line-height: 50px;
    border-radius: 3px;
  }

  .money {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
  }

  .money-item {
    line-height: 60px;
    width: 140px;
    text-align: center;
    border: 1.2px solid dodgerblue;
    border-radius: 5px;
    color: dodgerblue;
    font-weight: bold;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    transition: color .2s ease-in;
    margin: 15px 30px;
  }

  .money-item::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform .4s ease-in;
    transform-origin: center;
    background: dodgerblue;
    z-index: -1;
  }

  .money-item:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(2, 2, 2);
  }

  .money-item:hover {
    color: white;
    cursor: pointer;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 450px;
    margin: 40px auto 0 auto;
    text-align: left;
  }
</style>
