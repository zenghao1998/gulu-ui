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


import { expect } from 'chai';
//单元测试
{
    //测试loading是否能加载
    let constructor = Vue.extend(Button);
    let vm = new constructor({
        propsData:{
            loading:true
        }
    });
    vm.$mount()
    let svg = vm.$el.querySelector('use')
    expect(svg.getAttribute("xlink:href")).to.eq('#i-jiazai')
}
{
    //测试iconPosition
    let constructor = Vue.extend(Button);
    let vm = new constructor({
        propsData:{
            iconPosition:'left'
        }
    });
    vm.$mount('#app')
    let svg = vm.$el.querySelector('.g-button-content')
    expect(getComputedStyle(svg).order).to.eq('2')
}
{
    //测试click事件能否正常执行
    let constructor = Vue.extend(Button);
    let vm = new constructor({
        propsData:{
            iconPosition:'left'
        }
    });
    vm.$mount();
    vm.$on('click',()=>{
        console.log(1)
    })
    let svg = vm.$el
    // expect(getComputedStyle(svg).order).to.eq('2')
    svg.click()
}
