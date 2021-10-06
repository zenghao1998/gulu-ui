import Vue from 'vue'
import Button from './button'
import buttonGroup from './button-group'
Vue.component('g-button',Button)
Vue.component('g-button-group',buttonGroup)
new Vue({
    data:{
        msg:12
    },
}).$mount("#app")
