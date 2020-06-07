<template>
  <label class="my-checkbox" :class="{'is-checked':isChecked}">
    <span class="my-checkbox__input">
      <span class="my-checkbox__inner"></span>
      <input
        type="checkbox"
        class="my-checkbox__original"
        :name="name"
        v-model="model"
        :value="label"
      >
    </span>
    <span class="my-checkbox__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MyCheckbox',
  inject: {
    checkboxGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this.checkboxGroup ? this.checkboxGroup.value : this.value
      },
      set (val) {
        this.checkboxGroup ? this.checkboxGroup.$emit('input', val) : this.$emit('input', val)
      }
    },
    // 判断是否选中
    isChecked () {
      return this.checkboxGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>

<style lang="scss">
  .my-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;

    .my-checkbox__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;

      .my-checkbox__inner {
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);

        &:after {
          box-sizing: content-box;
          content: "";
          border: 1px solid #fff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }

      .my-checkbox__original {
        opacity: 0;
        outline: none;
        position: absolute;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }

    .my-checkbox__label {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }

    &.is-checked {
      .my-checkbox__input {
        .my-checkbox__inner {
          border-color: #409eff;
          background: #409eff;

          &:after {
            transform: rotate(45deg) scale(1);
          }
        }
      }

      .my-checkbox__label {
        color: #409eff;
      }
    }
  }
</style>
