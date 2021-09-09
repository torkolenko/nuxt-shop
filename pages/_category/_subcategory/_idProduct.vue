<template>
  <ShowGood/>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.idProduct);
    }
  }
</script>

<script>
  export default {
    layout: "myLayout"
  }
</script>
