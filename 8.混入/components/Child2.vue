<template>
  <div class="box">
    <h2>Child2</h2>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      arr: ['a', 'b', 'c', 'd']
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>