<template>
  <div id="app">
    <my-switch v-model="active" active-color="red" inactive-color="green" name="input"></my-switch>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
