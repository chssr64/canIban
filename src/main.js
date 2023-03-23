import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3TouchEvents from 'vue3-touch-events'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Vue3TouchEvents)
app.directive('click-outside', {
  beforeMount(el, binding) {
    el.clickOutsideEvent = event => {

      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    // Wait 1 frame otherwise a potential click that mounted the element will immediately trigger a click-outside event:
    window.requestAnimationFrame(() => {
      document.addEventListener('click', el.clickOutsideEvent)
    })
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  },
})
app.mount('#app')
