import Vue from 'vue'
import { createLocalVue, mount, Wrapper } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'

describe('Testing a component with vue-async-computed-decorator', () => {
  let wrapper: Wrapper<Vue>

  beforeAll(() => {
    wrapper = mount(HelloWorld, {
      localVue: createLocalVue(),
    })
  })
  test('A test fails at importing a component', async () => {
    console.log(wrapper)
  })
})
