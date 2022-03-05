import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

if ('serviceWorker' in navigator){
  alert('daaa')
}
else alert('noo')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
