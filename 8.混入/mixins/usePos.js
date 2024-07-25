export default {
  data() {
    return {
      test: 'abcdefg',
      pos: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    bindPosEvent(el) {
      const mousemove = e => {
        this.pos.x = e.pageX
        this.pos.y = e.pageY
      }
      el.addEventListener('mousemove', mousemove)

      return () => {
        el.removeEventListener('mousemove', mousemove)
      }
    }
  },
  created() {
    console.log('mixins 创建阶段')
  },
  mounted() {
    this.remove = this.bindPosEvent(document)
  },
  beforeDestroy() {
    this.remove()
  }
}