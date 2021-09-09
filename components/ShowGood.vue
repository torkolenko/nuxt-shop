<template>
  <div>
    <button @click = "goBack">Back</button>
    <div class = "showGoodWrapper">
      <p class = "showGoodTitle">{{findGoodById.title}}</p>
      <div class>
        <img :src = "getImgUrl" class = "showGoodImg"/>
      </div>
      <p class = "showGoodprice">Цена: ${{findGoodById.price}}</p>
      <div class = "showGooddescription">{{findGoodById.description}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      shopData: 'shopData/getData'
    }),
    
    findGoodById: function() {
      const routeArr = this.$route.path.split("/");
      const category = routeArr[1];
      const subCategory = routeArr[2];
      const idOfGood = routeArr[3];
      
      const good = this.shopData
        .find(item => item.title.toLowerCase() === category)
        .subcategories
        .find(item => item.title.toLowerCase() === subCategory)
        .goods
        .find(item => item.id.toString() === idOfGood);
      
      if (!good) {
        throw new Error("This id is not found. Please go back to main page.");
      }
      
      return good;
    },
    
    getImgUrl: function() {
      if (this.findGoodById) {
        return require(`~/static/icons/${this.findGoodById.title.toLowerCase()}.png`);
      }
    }
  },

  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang = "scss">
  @import "~/assets/css/variables";
  button {
    margin: 15px 0 0 15px;
    height: 30px;
    width: 70px;
  }
  
  .showGoodWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .showGoodTitle {
    margin-bottom: 15px;
    font-size: 25px;
  }

  .showGoodprice {
    font-size: 15px;
    margin-top: 5px;
  }

  .showGooddescription {
    margin-top: 20px;
  }

  .showGoodImg {
    height: 250px;
  }
</style>
