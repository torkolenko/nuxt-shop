<template>
  <nuxt-link :to="getLink" class = "styledSubCategory">
    {{subCategory.title}}
  </nuxt-link>
</template>

<script>

export default {
  props: ['subCategory', 'category'],
  computed: {
    getLink() {
      return `/${this.category.toLowerCase()}/${this.subCategory.title.toLowerCase()}`;
    }
  }
}
</script>

<style scoped lang = "scss">
  .styledSubCategory {
    color: black;
    text-decoration: none;
    margin: 4% 0 0 16%;
    font-size: 16px;
  }
</style>
