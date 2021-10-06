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


import chai from 'chai';
import spies from 'chai-spies'
chai.use(spies);
let expect = chai.expect
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
    //代理一个函数
    let spy = chai.spy(()=>{
        expect(1).to.eq(1)
    })
    vm.$on('click',spy)
    let svg = vm.$el
    svg.click();
    //断言代理的函数是否正常执行
    expect(spy).to.have.been.called()
}
