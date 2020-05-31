<template>
  <div id="app">
    <my-input placeholder="请输入内容" disabled></my-input>
    <my-input placeholder="请输入内容" type="text" v-model="username" clearable></my-input>
    <my-input placeholder="请输入内容" type="password" v-model="username" show-password></my-input>
    <my-input placeholder="请输入内容" type="password" v-model="username" show-password></my-input>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      username: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .my-input {
    width: 180px;
  }
</style>
