<template>
  <div id="app">
    <Increase></Increase>
    <p>------------------</p>
    <Reduce></Reduce>
  </div>
</template>

<script>
import Increase from './components/increase'
import Reduce from './components/reduce'

export default {
  name: 'App',
  components: {
    Increase,
    Reduce
  }
}
</script>

<style></style>
