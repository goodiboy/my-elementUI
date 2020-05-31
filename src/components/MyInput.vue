<template>
  <div class="my-input" :class="{'my-input--suffix':showSuffix}">
    <input
      class="my-input__inner"
      @input="inputHandle"
      :type=" passwordVisible ? 'text' : type"
      :name="name"
      :value="value"
      :disabled="disabled"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder">
    <span class="my-input__suffix" v-if="showSuffix">
      <i class="my-input__icon el-icon-circle-close" v-if="clearable && value" @click="clear"></i>
      <i class="my-input__icon el-icon-view"
         :class="{'my-input-showPassword':passwordVisible}"
         v-if="showPassword"
         @click="passwordVisible = !passwordVisible"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  data () {
    return {
      // 用于显示隐藏密码
      passwordVisible: false
    }
  },
  props: {
    // 站位文本
    placeholder: {
      type: String,
      default: ''
    },
    // input的类型
    type: {
      type: String,
      default: 'text'
    },
    // input的name值
    name: {
      type: String,
      default: ''
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 输入框的值
    value: {
      type: String,
      default: ''
    },
    // 是否显示清空图标
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否显示密码图标
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 是否显示图标
    showSuffix () {
      return this.showPassword || this.clearable
    }
  },
  methods: {
    // 输入框事件
    inputHandle (e) {
      this.$emit('input', e.target.value)
    },
    // 清空事件
    clear () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang="scss">
  .my-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    .my-input__inner {
      cursor: pointer;
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #000;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
      width: 100%;

      &:focus {
        outline: none;
        border-color: #409eff;
      }

      &.is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }

  .my-input--suffix {
    .my-input__inner {
      padding-right: 30px;
    }

    .my-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;

      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645, .045, .355, 1);
      }

      .my-input-showPassword {
        color: #409eff;
      }
    }
  }

</style>
