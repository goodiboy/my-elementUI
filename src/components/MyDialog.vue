<template>
  <transition name="dialog-fade">
    <div class="my-dialog__wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div class="my-dialog" :style="{width,marginTop:top}">
        <div class="my-dialog__header">
          <!-- 标题 -->
          <slot name="title">
            <span>{{title}}</span>
          </slot>
          <button class="my-dialog__headerbtn" @click="handleClose">
            <i class="el-icon-close"></i>
          </button>
        </div>
        <div class="my-dialog__body">
          <!-- 主体插槽 -->
          <slot></slot>
        </div>
        <div class="my-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: '15vh'
    },
    width: {
      type: String,
      default: '50%'
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    beforeClose: {
      type: Function,
      default: null
    }
  },
  methods: {
    // 关闭弹窗
    handleClose () {
      // 判断有没关闭弹窗之前的事件回调
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide () {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    // 点击遮照层关闭弹窗
    handleWrapperClick () {
      // 如果设置了不允许点击遮照层关闭，return
      if (!this.closeOnClickModal) return
      this.handleClose()
    }
  }
}
</script>

<style lang="scss">
  .my-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, .5);

    .my-dialog {
      position: relative;
      margin: 15vh auto 50px;
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
      box-sizing: border-box;
      width: 30%;

      &__header {
        padding: 20px 20px 10px;

        .my-dialog__title {
          line-height: 24px;
          font-size: 18px;
          color: #303133;
        }

        .my-dialog__headerbtn {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 0;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 16px;

          .el-icon-close {
            color: #909399;
          }
        }
      }

      &__body {
        padding: 30px 20px;
        color: #606266;
        font-size: 14px;
        word-break: break-all;
      }

      &__footer {
        padding: 10px 20px 20px;
        text-align: right;
        box-sizing: border-box;

        .my-button:first-child {
          margin-right: 20px;
        }
      }
    }
  }

  .dialog-fade-enter-active, .dialog-fade-leave-active {
    transition: all 0.5s;
  }

  .dialog-fade-enter, .dialog-fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }

  /*.dialog-fade-enter-active {
    animation: dialog-fade-in .4s;
  }

  .dialog-fade-leave-active {
    animation: dialog-fade-out .4s;
  }

  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }*/

  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
  }
</style>
