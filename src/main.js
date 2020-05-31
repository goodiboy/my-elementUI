import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton'
import MyDialog from './components/MyDialog'
import MyInput from './components/MyInput'
import MySwitch from './components/MySwitch'

import './assets/fonts/font.scss'

Vue.component(MyButton.name, MyButton)
Vue.component(MyDialog.name, MyDialog)
Vue.component(MyInput.name, MyInput)
Vue.component(MySwitch.name, MySwitch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
