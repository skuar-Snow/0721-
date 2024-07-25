<template>
  <div>
    <h1>{{title}}</h1>
    <button @click="title = Math.random()">修改title</button>
    <button @click="obj.name = Math.random()">修改obj.name</button>
    <Child1 />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'

export default {
  data() {
    return {
      title: '标题',
      obj: {
        name: 'xm'
      }
    }
  },
  provide() {
    return {
      appTitle: this.title,
      appObj: this.obj
    }
  },
  components: {
    Child1
  }
}
</script>

<style>
</style>