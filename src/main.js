import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import showMessage from '@/utils/showMessage'
Vue.prototype.$showMessage = showMessage
import './eventBus'
import "./mock"
import store from './store'

store.dispatch("setting/fetchSetting")

// 注册指令
import vLoading from './directive/loading'
Vue.directive("loading", vLoading)

import vLazy from './directive/lazy'
Vue.directive("lazy", vLazy)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
