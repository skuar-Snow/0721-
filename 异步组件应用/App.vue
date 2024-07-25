<template>
  <div>
    <h1>动态组件</h1>
    <button @click="curCom = 'Child1'">商品</button>
    <button @click="curCom = 'Child2'">评论</button>
    <button @click="curCom = 'Child3'">商家</button>

    <!-- <Child1 v-if="curCom === 'Child1'" />
    <Child2 v-else-if="curCom === 'Child2'" />
    <Child3 v-else-if="curCom === 'Child3'" /> -->

    <!-- 动态组件 -->
    <component :is="curCom"></component>
  </div>
</template>

<script>
// 同步引入组件，会打包到app.js中
import Child1 from './components/Child1.vue'
// import Child2 from './components/Child2.vue'
// import Child3 from './components/Child3.vue'

export default {
  data() {
    return {
      curCom: 'Child1'
    }
  },
  components: {
    Child1,
    // 异步引入组件，打包成单独的js文件，使用组件时再动态加载对应的js文件
    // 异步组件作用：减小打包后的主文件的体积，加快首屏加载时间
    Child2: () => import(/* webpackChunkName: 'Child2' */'./components/Child2.vue'),
    Child3: () => import(/* webpackChunkName: 'Child3' */'./components/Child3.vue')
  }
}
</script>

<style>

</style>