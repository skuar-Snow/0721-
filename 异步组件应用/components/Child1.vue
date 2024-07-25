<template>
  <div>
    <h2>这是商品组件</h2>
    <p>count: {{count}}</p>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style>

</style>