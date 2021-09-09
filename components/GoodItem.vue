<template>
  <div class = "goodItemWrapper">
    <nuxt-link :to = "getGoodLink" class = "imgWrapper">
      <img :src = "getImgUrl" class = "imgOfGood"/>
    </nuxt-link>
    <nuxt-link :to = "getGoodLink" class = "dataOfGood">
      <p style = "font-size: 18px">${{good.price}}</p>
      <p style = "font-size: 15px">{{good.title}}</p>
      <div style = "font-size: 12px">{{good.description}}</div>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  props: ['good'],
  computed: {
    getImgUrl: function() {
      return require(`~/static/icons/${this.good.title.toLowerCase()}.png`);
    },
    getGoodLink: function() {
      return `${this.$route.path}/${this.good.id}`;
    }
  }
}
</script>

<style scoped lang = "scss">
  @import "~/assets/css/variables";
  .goodItemWrapper {
    padding: 3% 1% 1% 3%;
    display: flex;
    flex-direction: column;
  }

  .imgWrapper{
    width: 150px;
    text-align: center;
    background-color: $gray-color;
    }

  .imgOfGood {
    height: 130px;
    margin-top: 5%;
  }

  .dataOfGood {
    margin-top: 10px;
    color: black;
    text-decoration: none;
  }

  p {
    margin-bottom: 3px;
  }
</style>
