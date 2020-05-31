<template>
  <div class="my-switch" :class="{'is-checked':value}" @click="handleClick">
    <input
      class="my-switch__input"
      type="checkbox"
      :name="name"
      :checked="value"
      ref="input"
    >
    <span class="my-switch__core" ref="core">
      <span class="my-switch__button"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MySwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor()
    }
  },
  computed: {},
  watch: {
    value () {
      this.setBackgroundColor()
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    },
    setBackgroundColor () {
      const newColor = this.value ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = newColor
      this.$refs.core.style.backgroundColor = newColor
    }
  }
}
</script>

<style lang="scss">
  .my-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;

    .my-switch__input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }

    .my-switch__core {
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color .3s, background-color .3s;
      vertical-align: middle;

      .my-switch__button {
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
  }

  .my-switch.is-checked {
    .my-switch__core {
      border-color: #409eff;
      background-color: #409eff;

      .my-switch__button {
        transform: translateX(20px);
      }
    }
  }

</style>
