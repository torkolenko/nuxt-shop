<template>
  <div class = "goodsWrapper">
    <GoodItem
      v-for ="good of filterGoods" 
      :key = "good.id"
      v-bind:good = "good"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    filterGoods: function() {
      const routeArr = this.$route.path.split("/");
      const category = routeArr[1];
      const subCategory = routeArr[2];
      
      const goods = this.shopData
        .find(item => item.title.toLowerCase() === category)
        .subcategories
        .find(item => item.title.toLowerCase() === subCategory)
        .goods;

        return goods;
    },
    
    ...mapGetters({
        shopData: 'shopData/getData'
    })
  }
}
</script>

<style scoped lang = "scss">
  .goodsWrapper {
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
  }
</style>
