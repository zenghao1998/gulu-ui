const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button.vue'

Vue.config.productionTip = false
Vue.config.devtools = false
//BDD 行为驱动测试，用自然语言语句转换为可执行测试
// expect:chai.js提供的， describe && it:mocha提供的
describe('Button', () => {
    //每一个it都是一个新的测试用例
    //第一个参数是你的测试用例名字（根据功能写名字），第二个参数是测试用例的代码
    it('button是否存在.', () => {
        expect(Button).to.exist
    })

    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        //断言是否和预期的一样
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })

    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-jiazai')
        vm.$destroy()
    })

    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })

    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()
        //普通函数不可被断言，添加间谍函数，这个函数可断言
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        //期待间谍函数有被调用
        expect(callback).to.have.been.called

    })
})
