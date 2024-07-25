<template>
  <div>
    <h1>app组件</h1>
    <button @click="show = !show">切换</button>
    <Child1 />
    <Child2 />
    <Child3 v-if="show" />
  </div>
</template>

<script>
import Child1 from './components/Child1.vue'
import Child2 from './components/Child2.vue'
import Child3 from './components/Child3.vue'

export default {
  data() {
    return {
      show: true
    }
  },
  components: {
    Child1,
    Child2,
    Child3
  }
}
</script>

<style>
</style>