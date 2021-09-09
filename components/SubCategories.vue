<template>
  <div class = "subCategories">
    <SubCategoryItem
      v-for = "subCategory of subCategories"
      :key = "subCategory.id"
      v-bind:subCategory = "subCategory"
      v-bind:category = "category"
    />
  </div>
</template>

<script>

export default {
  props: ['subCategories', 'category']
}
</script>

<style scoped lang = "scss">
  .subCategories {
    display: flex;
    flex-direction: column;
  }
</style>
