<template>
  <div class="box">
    <h2>Child1</h2>
    <button @click="$emit('change', -1)">-1</button>
    {{num}}
    <button @click="$emit('change', 1)">+1</button>
  </div>
</template>

<script>
export default {
  props: ['num'],
  data() {
    return {
    }
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>