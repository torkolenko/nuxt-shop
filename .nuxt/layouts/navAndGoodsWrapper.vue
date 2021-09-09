<template>
  <div class="container">
    <Header/>
    <Nuxt class="contentWrapper"/>
  </div>
</template>

<style scoped lang = "scss">
  @import "~/assets/css/variables";
  .container {
    margin: 0 auto;
    background-color: $main-color;
    max-width: 1024px;
    min-height: 100vh;
  }

  .contentWrapper {
    min-height: 93vh;
    display: flex;
  }
</style>