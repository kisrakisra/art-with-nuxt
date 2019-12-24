import test from 'ava'
import { mount, shallowMount } from '@vue/test-utils'
import RandomArt from '../../components/RandomArt'
import sinon from 'sinon'

let wrapper

const buttonText = 'Randomize Art'
const source = "https://picsum.photos/200"

test.beforeEach(async () => {
    wrapper = mount(RandomArt, {
        propsData: { buttonText },
    })
    await wrapper.setData({
        source
    });
})

test('RandomArt.vue shapshow', (t) => {
    t.snapshot({ html: wrapper.html() })
})

test('RandomArt.vue to display img', (t) => {
    const img = wrapper.find('img')
    t.is(img.attributes().src, source)
})

test('RandomArt.vue has button', (t) => {
    const button = wrapper.findAll('button')
    t.is(button.length, 1)
})

test('RandomArt.vue button clicks source changes', (t) => {
    const button = wrapper.findAll('button')
    const changeSourceStub = sinon.stub()
    wrapper.setMethods({ changeSource: changeSourceStub })
    button.trigger('click')
    t.is(changeSourceStub.called, true)
})
