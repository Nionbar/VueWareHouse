import Vue from 'vue'
import App from './App.vue'

//关闭生成提示
Vue.config.productionTip = false

new Vue({
    el:'#app',
    render:h=>h(App)
})