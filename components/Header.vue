<template>
  <div class= "header">
    <nuxt-link to="/" class = "headerLink">
      <h1 class="textOfHeader">Shop</h1>
    </nuxt-link>
  </div>
</template>

<style scoped lang = "scss">
  @import "~/assets/css/variables";
  .header {
    font-size: 15px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: $gray-color;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .headerLink {
    color: black; 
    text-decoration: none; 
    margin-left: 25px;
  }

  .textOfHeader {
    font-weight: normal;
  }
</style>
