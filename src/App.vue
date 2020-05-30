<template>
  <div id="app">
    <!--<div class="row">
      <my-button>默认按钮</my-button>
      <my-button icon="el-icon-delete" type="primary">主要按钮</my-button>
      <my-button type="success">成功按钮</my-button>
      <my-button type="info">信息按钮</my-button>
      <my-button type="warning">警告按钮</my-button>
      <my-button type="danger">危险按钮</my-button>
    </div>
    <div class="row">
      <my-button plain>默认按钮</my-button>
      <my-button plain type="primary">主要按钮</my-button>
      <my-button plain type="success">成功按钮</my-button>
      <my-button plain type="info">信息按钮</my-button>
      <my-button plain type="warning">警告按钮</my-button>
      <my-button plain type="danger">危险按钮</my-button>
    </div>
    <div class="row">
      <my-button round plain>默认按钮</my-button>
      <my-button round plain type="primary">主要按钮</my-button>
      <my-button round plain type="success">成功按钮</my-button>
      <my-button round plain type="info">信息按钮</my-button>
      <my-button round plain type="warning">警告按钮</my-button>
      <my-button round plain type="danger">危险按钮</my-button>
    </div>
    <div class="row">
      <my-button circle plain>按</my-button>
      <my-button circle plain type="primary">钮</my-button>
      <my-button circle plain type="success">钮</my-button>
      <my-button circle plain type="info">钮</my-button>
      <my-button circle plain icon="el-icon-delete" type="warning"></my-button>
      <my-button circle plain icon="el-icon-delete" disabled type="danger" @click="fn"></my-button>
    </div>-->
    <my-button plain type="primary" @click="visible = true">主要按钮</my-button>
    <my-dialog title="新的标题" width="60%" top="20vh" :visible.sync="visible"
               :close-on-click-modal="false"
               :before-close="beforeClose">
      <template v-slot:title>
        <h1>这是一个插槽标题</h1>
      </template>
      <template>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </template>
      <template v-slot:footer>
        <my-button>取消</my-button>
        <my-button type="primary">确定</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    fn (e) {
      console.log(e)
    },
    beforeClose (done) {
      console.log(done)
      done()
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 20px;

    .my-button {
      margin: 0 10px;
    }
  }
</style>
