import Vue from 'vue'
import App from './App.vue'
import MyButton from './components/MyButton'
import MyDialog from './components/MyDialog'
import MyInput from './components/MyInput'
import MySwitch from './components/MySwitch'
import MyRadio from './components/MyRadio'
import MyRadioGroup from './components/MyRadioGroup'
import MyCheckbox from './components/MyCheckbox'
import MyCheckboxGroup from './components/MyCheckboxGroup'

import './assets/fonts/font.scss'

Vue.component(MyButton.name, MyButton)
Vue.component(MyDialog.name, MyDialog)
Vue.component(MyInput.name, MyInput)
Vue.component(MySwitch.name, MySwitch)
Vue.component(MyRadio.name, MyRadio)
Vue.component(MyRadioGroup.name, MyRadioGroup)
Vue.component(MyCheckbox.name, MyCheckbox)
Vue.component(MyCheckboxGroup.name, MyCheckboxGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
