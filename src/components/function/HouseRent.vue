<template>
  <div class="house-rent">
    <div class="house-item" v-for="houseItem in houses">
      <div class="house-img"><img :src="houseItem.imgUrl"/></div>
      <div class="house-desc">
        <h3 class="house-address">{{houseItem.userDetail[0].address}}</h3>
        <div class="house-desc-other">{{houseItem.position}}/{{houseItem.layout}}/{{houseItem.area}}m²</div>
        <div class="house-id">户号&nbsp;&nbsp;&nbsp;{{houseItem.id}}</div>
        <div class="house-name">{{houseItem.userDetail[0].name}}&nbsp;&nbsp;&nbsp;{{houseItem.userDetail[0].tel}}</div>
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
        houses: []
      }
    },
    created() {
      this.getHouseDetail();
    },
    methods: {
      getHouseDetail() {
        this.$http.get('http://127.0.0.1:8090/api/house')
          .then((res) => {
            if(res.status === 200) {
              this.houses = res.data;
            }
          })
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
