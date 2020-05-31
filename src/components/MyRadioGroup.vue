<template>
  <div class="my-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MyRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>

<style scoped>

</style>
