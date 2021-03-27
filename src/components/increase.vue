<template>
  <div>
    <!-- 访问State数据的第一种方式 -->
    <!-- <h3>当前数值:{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="add">加1</button>
    <button @click="addN">加N</button>
    <button @click="addAsync">异步加1</button>
    <button @click="addNAsync">异步加N</button>
  </div>
</template>

<script>
export default {
  name: 'Increase',
  data() {
    return {}
  },
  methods: {
    add() {
      this.$store.commit('add')
    },
    addN() {
      this.$store.commit('addN', 3)
    },
    addAsync() {
      // 用dispatch触发actions
      this.$store.dispatch('addAsync')
    },
    addNAsync() {
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>

<style></style>
