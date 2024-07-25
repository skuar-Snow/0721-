<template>
  <div class="box">
    <button @click="$emit('input', value - 1)">-</button>
    <b>{{value}}</b>
    <button @click="$emit('input', value + 1)">+</button>
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid;
  padding: 20px;
}
</style>