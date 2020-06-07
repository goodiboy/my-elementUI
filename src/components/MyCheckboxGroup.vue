<template>
  <div class="my-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCheckboxGroup',
  provide () {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
