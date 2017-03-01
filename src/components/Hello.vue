<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Hello Vue.js!'
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
$color: #dd3333;
h1 {
  font-weight: normal;
  color: $color;
}
</style>
