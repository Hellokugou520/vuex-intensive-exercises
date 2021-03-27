<template>
  <div>
    <!-- <h3>当前数值:{{ count }}</h3> -->
    <h3>{{ showNum }}</h3>
    <button @click="handle1">减1</button>
    <button @click="handle2">减N</button>
    <button @click="reduceAsync">异步减1</button>
    <button @click="reduceNAsync(3)">异步减N</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Reduce',
  data() {
    return {}
  },
  computed: {
    // 访问State数据的第二种方式
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['reduce', 'reduceN']),
    ...mapActions(['reduceAsync', 'reduceNAsync']),
    handle1() {
      this.reduce()
    },
    handle2() {
      this.reduceN(3)
    }
  }
}
</script>

<style></style>
