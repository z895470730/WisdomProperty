<template>
  <div class="house-rent">
    <div class="house-item" v-for="houseItem in houses">
      <div class="house-img"><img :src="houseItem.imgUrl"/></div>
      <div class="house-desc">
        <h3 class="house-address">{{houseItem.address}}</h3>
        <div class="house-desc-other">{{houseItem.direction}}/{{houseItem.layout}}/{{houseItem.area}}m²</div>
        <div class="house-id">户号&nbsp;&nbsp;&nbsp;{{houseItem.id}}</div>
        <div class="house-name">{{houseItem.name}}&nbsp;&nbsp;&nbsp;{{houseItem.tel}}</div>
      </div>
      <div class="house-price">
        <strong>{{houseItem.price}}</strong>元/月
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data() {
      return {
        houses: [{
          imgUrl:'https://image1.ljcdn.com/410100-inspection/15d48cfe-a6e1-4c7d-afff-26d3bbdb382c.jpg.250x182.jpg',
          address: '东区-85栋-901号',
          area: 89,
          direction: '南',
          layout: '两室一厅一厨一卫',
          price: '4000',
          name: '张三',
          id: '10001',
          tel: '17982737797'
        },{
          imgUrl:'https://image1.ljcdn.com/410100-inspection/15d48cfe-a6e1-4c7d-afff-26d3bbdb382c.jpg.250x182.jpg',
          address: '东区-85栋-901号',
          area: 89,
          direction: '南',
          layout: '两室一厅一厨一卫',
          price: '4000',
          name: '张三',
          id: '10001',
          tel: '17982737797'
        },{
          imgUrl:'https://image1.ljcdn.com/410100-inspection/15d48cfe-a6e1-4c7d-afff-26d3bbdb382c.jpg.250x182.jpg',
          address: '东区-85栋-901号',
          area: 89,
          direction: '南',
          layout: '两室一厅一厨一卫',
          price: '4000',
          name: '张三',
          id: '10001',
          tel: '17982737797'
        },{
          imgUrl:'https://image1.ljcdn.com/410100-inspection/15d48cfe-a6e1-4c7d-afff-26d3bbdb382c.jpg.250x182.jpg',
          address: '东区-85栋-901号',
          area: 89,
          direction: '南',
          layout: '两室一厅一厨一卫',
          price: '4000',
          name: '张三',
          id: '10001',
          tel: '17982737797'
        },{
          imgUrl:'https://image1.ljcdn.com/410100-inspection/15d48cfe-a6e1-4c7d-afff-26d3bbdb382c.jpg.250x182.jpg',
          address: '东区-85栋-901号',
          area: 89,
          direction: '南',
          layout: '两室一厅一厨一卫',
          price: '4000',
          name: '张三',
          id: '10001',
          tel: '17982737797'
        },]
      }
    }
  }
</script>
<style>
  .house-rent {
    display: flex;
    flex-wrap: wrap;
  }

  .house-item {
    width: 45%;
    padding: 10px;
    display: flex;
    margin-top: 20px;
  }

  .house-address {
    color: black;
  }

  .house-img {
    width: 35%;
  }

  .house-img img{
    border-radius: 5px;
    width: 100%;
    vertical-align: bottom;
  }

  .house-desc {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    color: #AAAAAA;
    text-align: left;
    flex: 2;
  }

  .house-price {
    flex: 1;
    color: #fa5741;
  }

  .house-price strong {
    font-size: 24px;
  }
</style>
