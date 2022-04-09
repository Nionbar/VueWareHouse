import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store'

// 关闭生成提示
Vue.config.productionTip = false

new Vue({
    el:'#app',
    store,
    render:h=>h(App)
})