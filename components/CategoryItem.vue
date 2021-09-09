<template>
  <div>
    <div class = "styledCategory">{{category.title}}</div>
    <SubCategories
      v-bind:subCategories="category.subcategories"
      v-bind:category="category.title"
    />
  </div>
</template>

<script>

export default {
  props: ['category']
}
</script>

<style scoped lang = "scss">
  .styledCategory {
    margin: 9% 0 0 11%;
    font-size: 23px;
  }
</style>
