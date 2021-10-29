import Vue from 'vue'
import Button from './button'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
new Vue({
    data: {
        msg: 12
    },
}).$mount("#app")
