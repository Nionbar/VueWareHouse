import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResources from 'vue-resource'
//关闭生成提示
Vue.config.productionTip = false

Vue.use(vueResources)
new Vue({
    el:'#app',
    beforeCreate(){
        Vue.prototype.$bus = this
    },
    render:h=>h(App)
})