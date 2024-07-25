<template>
  <div class="box">
    <div class="row">
      姓名：<input type="text" :value="name" @input="$emit('update:name', $event.target.value)">
    </div>
    <div class="row">
      爱好：<input type="text" :value="hobby" @input="$emit('update:hobby', $event.target.value)">
    </div>

    <button @click="$emit('update:age', age - 1)">-</button>
    <b>{{age}}</b>
    <button @click="$emit('update:age', age + 1)">+</button>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'hobby']
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>