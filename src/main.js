import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton'
import MyDialog from './components/MyDialog'

import './assets/fonts/font.scss'

Vue.component(MyButton.name, MyButton)
Vue.component(MyDialog.name, MyDialog)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
