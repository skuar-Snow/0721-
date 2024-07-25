<template>
  <div>
    <h1>动画</h1>
    <button @click="show = !show">商品</button>
    <!-- transition: 在元素显示或隐藏时动态添加类名 -->
    <!-- <transition
      name="ani"
      enter-active-class="aniClass"
      leave-active-class="animate__animated animate__backOutDown"
      @after-enter="afterEnter"
      @before-enter="beforeEnter"
    >
      <p v-if="show">ppp</p>
    </transition> -->
    <transition
      name="scale"
      enter-active-class="scale-enter-active"
      enter-class="scale-enter"
      enter-to-class="scale-enter-to"
      leave-active-class="scale-leave-active"
      leave-class="scale-leave"
      leave-to-class="scale-leave-to"
    >
      <p v-if="show" class="scale-enter-active">ppp</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    afterEnter() {
      console.log('元素显示完成')
    },
    beforeEnter() {
      console.log('开始动画')
    }
  },
  components: {
  }
}
</script>

<style>
h1:hover {
  animation: swing 2s;
}
p {
  width: 100px;
  height: 100px;
  background: red;
}
/* @keyframes ani {
  0% {
    transform: translate(0) rotate(0deg);
  }
  25% {
    transform: translate(0, 500px) rotate(3600deg);
  }
  50% {
    transform: translate(500px,500px) rotate(0deg);
  }
  75%{
    transform: translate(500px,0px) rotate(3600deg);
  }
  100% {
    transform: translate(0) rotate(0deg);
  }
}
.aniClass {
  animation: ani 5s linear 5s;
} */



/* 显示元素时自动添加的类名 */
.scale-enter {
  transform: scale(0);
}
.scale-enter-active {
  transition: transform 1s linear;
}
.scale-enter-to {
  transform: scale(1);
}
/* 隐藏元素时自动添加的类名 */
.scale-leave {
  transform: scale(1);
  opacity: 1;
}
.scale-leave-active {
  transition: transform 1s linear, opacity 1s linear;
}
.scale-leave-to {
  transform: scale(20);
  opacity: 0;
}
</style>