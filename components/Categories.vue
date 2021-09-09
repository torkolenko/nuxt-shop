<template>
  <div class = "categoriesWrapper">
    <form @submit.prevent = "onSubmit" class = "searchWrapper">
      <input 
        placeholder = "Введите id товара" 
        style ="width: 100%" 
        v-model="id"
      />
      <button type = "submit" style = "margin-left: 5%">Поиск</button>
    </form>
    <div class="styledCategories">
      <CategoryItem 
        v-for ="category of shopData"
        :key="category.id"
        v-bind:category = "category"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      id: ""
    }
  },
  
  computed: {
    ...mapGetters({
      shopData: 'shopData/getData'
    }),
  },

  methods: {
    onSubmit: function() {
      let subCategory = {};
      const category = this.shopData.find(item => {
        subCategory = item.subcategories.find(
          i => {
            return i.goods.find( good => this.id === good.id.toString());
          }
        );
        
        return subCategory;
      });
      
      if (category && subCategory) {
        const categoryTitle = category.title.toLowerCase();
        const subCategoryTitle = subCategory.title.toLowerCase();

        this.$router.push(`/${categoryTitle}/${subCategoryTitle}/${this.id}`);
      } else {
        alert("К сожалению, товаров с таким id пока нет в наличии");
        this.id = "";
      }
    }
  }
}
</script>


<style scoped lang = "scss">
  @import "~/assets/css/variables";

  .categoriesWrapper{
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .searchWrapper{
    display: flex;
  }

  .styledCategories{
    margin-top: 10px;
    background-color: $gray-color;
    width: 75%;
    padding-bottom: 12%;
  }
</style>
