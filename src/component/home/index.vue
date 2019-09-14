<template>
  <div class="home">
    <h2>{{title}}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "首页"
    };
  },
  mounted(){
    this.title = Object.assign({}, {title:'hello world'}).title
  }
};
</script>

<style lang="scss" scoped>
.home{
  color: blue;
  h2{
    font-size: 20px;
    box-shadow: 0 0 3px 5px rgba(222, 222, 222, .3);
  }
}
</style>


