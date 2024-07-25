<template>
  <div>
    <h2>{{title}}</h2>
    <input type="text" v-model="title">
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '标题'
    }
  }
}
</script>

<style>

</style>