import Vue from 'vue'
import App from '@app/App.vue'
//import makeStore from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
