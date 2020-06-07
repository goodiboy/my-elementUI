<template>
  <div id="app">
    <my-checkbox v-model="active" label="1" name="abc"></my-checkbox>
    <my-checkbox-group v-model="group">
      <my-checkbox v-model="active" label="1" name="abc"></my-checkbox>
      <my-checkbox v-model="active" label="2" name="abc"></my-checkbox>
    </my-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      active: false,
      group: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
