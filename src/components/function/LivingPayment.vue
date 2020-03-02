<template>
  <div class="living-payment">
    <div class="payment-search">
      <div style="font-size:20px">电费充值</div>
      <div class="payment-input-area">
        <input class="payment-input" placeholder="请输入要充值的户号"/>
        <div class="payment-btn">充值</div>
      </div>
      <el-card class="box-card" style="box-shadow: none">
        <div slot="header" class="clearfix">
          <span>住户信息</span>
        </div>
        <div class="text item">门牌号：xxx</div>
        <div class="text item">户主姓名：xxx</div>
        <div class="text item">电费余额：xxx</div>
        <div class="text item">水费余额：xxx</div>
        <div class="text item">燃气费余额：xxx</div>
      </el-card>
    </div>
    <div style="width: 50%; border-left: 1px solid lightgray">
      <div class="payment-option">
        <el-card
          class="paymentItem"
          :body-style="{ padding: '0px' }"
          v-for="funcItem in func"
          :key="funcItem.name"
        >
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;" :style="funcItem.active === true ? 'background: dodgerblue' : ''">
            <span class="payment-name" :style="funcItem.active === true ? 'color: white' : ''">
              {{funcItem.name}}
            </span>
          </div>
        </el-card>
      </div>
      <div class="money">
        <div
          class="money-item"
          v-for="(item, index) in moneyList"
          @click="activeMoneyItem(index)"
          :style="item.active ? 'background: dodgerblue; color: white' : ''"
        >
          {{item.num}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'LivingPayment',
    data() {
      return {
        func: [
          {name: '电费充值', img: '', active: true},
          {name: '水费充值', img: '', active: false},
          {name: '燃气费充值', img: '', active: false},
        ],
        moneyList: [
          {num: '50元', active: false},
          {num: '100元', active: false},
          {num: '200元', active: false},
          {num: '300元', active: false},
          {num: '500元', active: false},
          {num: '自定义金额', active: false}
        ],
        typeActive: '',
        moneyActive: ''
      };
    },
    methods: {
      activeMoneyItem(itemIndex) {
        this.moneyList = [
          {num: '50元', active: false},
          {num: '100元', active: false},
          {num: '200元', active: false},
          {num: '300元', active: false},
          {num: '500元', active: false},
          {num: '自定义金额', active: false}
        ];
        this.moneyList[itemIndex].active = true;
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
    margin: 50px auto 0 auto;
  }

  .payment-option {
    display: flex;
    justify-content: center;
  }

  .paymentItem {
    width: 130px;
    margin: 0 15px;
  }

  .paymentItem:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }

  .payment-name {
    font-size: 20px;
    color: dodgerblue;
  }

  .image {
    width: 100%;
    display: block;
  }

  .payment-input-area {
    border: 3px solid dodgerblue;
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
    font-size: 20px;
    caret-color: dodgerblue;
    outline: none;
  }

  .payment-btn {
    position: absolute;
    right: -2px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 100%;
    background: dodgerblue;
    color: white;
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    cursor: pointer;
    font-size: 17px;
    font-weight: bold;
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
    border: 1px solid dodgerblue;
    border-radius: 8px;
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
