<template>
  <div class="box">
    <h2>Child3</h2>
    <p>appTitle: {{ appTitle }}</p>
    <p>{{appObj}}</p>
  </div>
</template>

<script>

export default {
  inject: ['appTitle', 'appObj'],
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