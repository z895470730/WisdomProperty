<template>
  <div class="home-page">
    <Header></Header>
    <Content></Content>
  </div>
</template>
<script>
  import Header from '@/components/Header';
  import Content from '@/components/Content';
  export default {
    name: 'HomePage',
    components:{Header, Content},
    data() {
      return {
        show3: true
      }
    }
  }
</script>
<style>
  .home-page {
    height: 100%;
  }
</style>
