<template>
  <div>
    <h1>{{title}}</h1>
    <!-- <input type="text" v-model="title">
    <input type="text" :value="title" @input="title = $event.target.value"> -->

    <!-- <Input :value="title" @input="val => title = val" /> -->
    <Input v-model="title" />
    <Counter v-model="count" />

    <hr />
    <!-- <CounterInput
      :name="obj.name"
      :hobby="obj.hobby"
      :age="obj.age"
      @update:name="val => obj.name = val"
      @update:hobby="val => obj.hobby = val"
      @update:age="val => obj.age = val"

    /> -->
    <CounterInput
      :name.sync="obj.name"
      :hobby.sync="obj.hobby"
      :age.sync="obj.age"
    />
    {{obj}}
  </div>
</template>

<script>
import Input from './components/Input.vue'
import Counter from './components/Counter.vue'
import CounterInput from './components/CounterInput.vue'

export default {
  data() {
    return {
      title: 'app',
      count: 10,
      obj: {
        name: '小明',
        age: 22,
        hobby: '吃饭'
      }
    }
  },
  components: {
    Input,
    Counter,
    CounterInput
  }
}
</script>

<style>

</style>