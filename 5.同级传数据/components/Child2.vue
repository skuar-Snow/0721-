<template>
  <div class="box">
    <h2>Child2</h2>
    <button @click="$emit('change', 2)">+2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>