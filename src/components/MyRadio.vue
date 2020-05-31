<template>
  <label class="my-radio" :class="{'is-checked':label === model}">
    <!-- 小圆 -->
    <span class="my-radio__input">
      <span class="my-radio__inner"></span>
      <input
        class="my-radio__original"
        type="radio"
        :value="label"
        v-model="model"
      >
    </span>
    <span class="my-radio__label">
      <slot>{{label}}</slot>
      <!-- 如果没有插槽，就显示label -->
      <!--<template v-if="!$slots.default">{{label}}</template>-->
    </span>
  </label>
</template>

<script>
export default {
  name: 'MyRadio',
  inject: {
    radioGroup: {
      default: null
    }
  },
  computed: {
    // 绑定新的数据
    model: {
      get () {
        // 父组件的值
        return this.radioGroup ? this.radioGroup.$attrs.value : this.value
      },
      set (value) {
        // 触发父组件的input事件，设置值
        if (this.radioGroup) {
          this.radioGroup.$emit('input', value)
        } else {
          this.$emit('input', value)
        }
      }
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: ''
    }
  }
}
</script>

<style lang="scss">
  .my-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    .my-radio__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;

      .my-radio__inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;

        &:after {
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform .15s ease-in;
        }
      }

      .my-radio__original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }

    .my-radio__label {
      font-size: 14px;
      padding-left: 10px;
    }

    &.is-checked {
      .my-radio__input {
        .my-radio__inner {
          border-color: #409eff;
          background: #409eff;

          &:after {
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
    }

  }
</style>
